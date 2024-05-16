import { Component } from '@angular/core';
import { ClienteServiceService } from '../services/cliente-service.service';
import { Cliente } from '../../../models/cliente';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-cliente-detalle',
    standalone: false,
    templateUrl: './cliente-detalle.component.html',
    styleUrl: './cliente-detalle.component.css'
})
export class ClienteDetalleComponent {

  constructor(clienteService:ClienteServiceService, routeManager: ActivatedRoute){
    routeManager.params.subscribe(params => {
      if(params["id"]){
        this.cliente = clienteService.getCliente(params["id"])
      }
    })
      
  }

  cliente:Cliente = new Cliente();
}
