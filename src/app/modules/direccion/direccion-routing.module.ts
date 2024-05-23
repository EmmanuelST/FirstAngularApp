import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DireccionComponent } from './direccion/direccion.component';
import { DireccionDetalleComponent } from './direccion-detalle/direccion-detalle.component';

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
    path: 'direcciones/:id',
    component: DireccionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DireccionRoutingModule { }
