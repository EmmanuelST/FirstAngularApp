import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteDetalleComponent } from './cliente-detalle/cliente-detalle.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/clientes',
    pathMatch: 'full'
  },
  {
    path: 'clientes',
    component: ClientesComponent
  },
  {
    path: 'clientes/:id',
    component: ClienteDetalleComponent
  },
  {
    path: 'clientesForm/:id',
    component: ClienteFormComponent
  },
  {
    path: 'clientesForm',
    component: ClienteFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
