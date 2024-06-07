import { Component } from '@angular/core';
import { ClienteServiceService } from '../services/cliente-service.service';
import { Cliente } from '../../../models/cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-cliente-detalle',
  standalone: false,
  templateUrl: './cliente-detalle.component.html',
  styleUrl: './cliente-detalle.component.css'
})
export class ClienteDetalleComponent {

  cliente: Observable<Cliente | undefined> = of(undefined);

  constructor(private clienteService: ClienteServiceService, private routeManager: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.routeManager.params.subscribe(params => {
      if (params["id"]) {
        this.cliente = this.clienteService.getClienteById(params["id"]);
      }
    })
  }

  submitChanges(client: Cliente) {
    this.clienteService.upsertCliente(client);
    this.router.navigate([''])
  }

}
