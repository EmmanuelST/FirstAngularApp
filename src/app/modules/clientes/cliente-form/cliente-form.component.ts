import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteServiceService } from '../services/cliente-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../../models/cliente';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent {

  form: FormGroup;
  clienteId: number | undefined;
  cliente: Cliente | undefined;

  constructor(private formBuilder: FormBuilder,
    private clienteService: ClienteServiceService,
    private routeManager: ActivatedRoute,
    private router: Router) {
    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        cedula: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
        birthDate: [new Date(), Validators.required],
        createAt: [new Date(), Validators.required],
        email: ['', [Validators.required, Validators.email]],
        active: [true, Validators.required],
      }
    )
  }

  ngOnInit() {
    this.routeManager.params.subscribe(params => {
      this.clienteId = params["id"]

      if (this.clienteId === null) {
        return;
      }

      this.clienteService.getClienteById(params["id"]).subscribe({
        next: (value) => {
          this.form.patchValue(value);
          this.cliente = value;
        },
        error: (error) => {
          console.log(error);
          this.form.patchValue(new Cliente());
          this.cliente = new Cliente();
        }
      });
    })
  }

  onSubmit() {
    this.form.markAllAsTouched();
    console.info('Valor del formulario:', this.form.value);
    console.info('El formulario es valido:', this.form.valid);

    if (this.form.valid && this.cliente) {
      const formValue = this.form.value;
      this.cliente.name = formValue.name;
      this.cliente.lastName = formValue.lastName;
      this.cliente.cedula = formValue.cedula;
      this.cliente.email = formValue.email;
      this.cliente.birthDate = formValue.birthDate;
      this.cliente.active = formValue.active === "true";

      this.clienteService.upsertCliente(this.cliente);
      this.router.navigate([''])
    }

  }

}
