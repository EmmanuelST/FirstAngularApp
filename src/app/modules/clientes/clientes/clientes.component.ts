import { Component } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { ClienteServiceService } from '../services/cliente-service.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-clientes',
  standalone: false,
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  clientes : Observable<Array<Cliente>> = of(new Array<Cliente>);

  constructor(private clienteService: ClienteServiceService) {
    
  }

  ngOnInit(){
    this.clientes = this.clienteService.getList();
  }

  toggleActiveState(cliente: Cliente) {
    cliente.active = !cliente.active;
    this.clienteService.updateCliente(cliente)
  }
}
