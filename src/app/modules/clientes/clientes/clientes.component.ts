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
  clientes: Array<Cliente> = new Array<Cliente>;

  constructor(private clienteService: ClienteServiceService) {

  }

  ngOnInit() {
    this.clienteService.getList().subscribe({
      next: (value) => {
        this.clientes = value;
      },
      error: (error) => {
        console.log(error)
      }
    });
  }

  toggleActiveState(cliente: Cliente) {
    cliente.active = !cliente.active;
    this.clienteService.upsertCliente(cliente)
  }
}
