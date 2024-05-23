import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DireccionRoutingModule } from './direccion-routing.module';
import { ActiveButtonComponent } from '../../active-button/active-button.component';
import { CardContainerComponent } from '../../card-container/card-container.component';
import { DireccionComponent } from './direccion/direccion.component';
import { DireccionDetalleComponent } from './direccion-detalle/direccion-detalle.component';


@NgModule({
  declarations: [
    DireccionComponent,
    DireccionDetalleComponent
  ],
  imports: [
    CommonModule,
    DireccionRoutingModule,
    CommonModule,
    ActiveButtonComponent,
    CardContainerComponent,
  ]
})
export class DireccionModule { }
