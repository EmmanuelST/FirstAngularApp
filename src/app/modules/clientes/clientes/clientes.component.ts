import { Component } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { ClienteServiceService } from '../services/cliente-service.service';

@Component({
  selector: 'app-clientes',
  standalone: false,
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {

  constructor(clienteService: ClienteServiceService) {
    this.clientes = clienteService.getList();
  }

  toggleActiveState(cliente: Cliente) {
    cliente.active = !cliente.active;
  }

  clientes: Cliente[] = [];

}
