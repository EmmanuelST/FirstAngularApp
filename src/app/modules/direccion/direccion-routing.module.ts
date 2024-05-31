import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DireccionComponent } from './direccion/direccion.component';
import { DireccionDetalleComponent } from './direccion-detalle/direccion-detalle.component';
import { DireccionFormComponent } from './direccion-form/direccion-form.component';

const routes: Routes = [
  {
    path: 'direcciones',
    component: DireccionComponent
  },
  {
    path: 'direccion/:id',
    component: DireccionDetalleComponent
  },
  {
    path: 'direccion',
    component: DireccionDetalleComponent
  },
  {
    path: 'direcciones/:id',
    component: DireccionComponent
  },
  {
    path: 'direccionForm/:id',
    component: DireccionFormComponent
  },
  {
    path: 'direccionForm',
    component: DireccionFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DireccionRoutingModule { }
