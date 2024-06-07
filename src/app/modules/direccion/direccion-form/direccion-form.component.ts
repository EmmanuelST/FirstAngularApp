import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DireccionService } from '../services/direccion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Direccion } from '../../../models/direccion';

@Component({
  selector: 'app-direccion-form',
  templateUrl: './direccion-form.component.html',
  styleUrl: './direccion-form.component.css'
})
export class DireccionFormComponent {
  form: FormGroup;
  direccionId: number | undefined;
  direccion: Direccion | undefined;

  constructor(private formBuilder: FormBuilder,
    private direccionService: DireccionService,
    private routeManager: ActivatedRoute,
    private router: Router) {
    this.form = this.formBuilder.group(
      {
        alias: ['', Validators.required],
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zipCode: ['', Validators.required],
        country: ['', Validators.required],
        active: [true, Validators.required],
        clienteId: [0, Validators.required],
      }
    )
  }


  ngOnInit() {
    this.routeManager.params.subscribe(params => {
      this.direccionId = params["id"]
      console.log(params);
      if (this.direccionId === null) {
        return;
      }

      this.direccionService.getDireccionById(params["id"]).subscribe({
        next: (value) => {
          this.form.patchValue(value);
          this.direccion = value;
        },
        error:(error) => {
          console.log(error);
        }
      });
    })
  }

  onSubmit() {
    this.form.markAllAsTouched();
    console.info('Valor del formulario:', this.form.value);
    console.info('El formulario es valido:', this.form.valid);

    if (this.form.valid && this.direccion) {
      const formValue = this.form.value;
      this.direccion.alias = formValue.alias;
      this.direccion.street = formValue.street;
      this.direccion.city = formValue.city;
      this.direccion.state = formValue.state;
      this.direccion.zipCode = formValue.zipCode;
      this.direccion.country = formValue.country;
      this.direccion.active = formValue.active === "true";
      this.direccion.clienteId = Number(formValue.clienteId);

      this.direccionService.upsertDireccion(this.direccion);
      this.router.navigate(['direcciones']);
    }

  }

}
