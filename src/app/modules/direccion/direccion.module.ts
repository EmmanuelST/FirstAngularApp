import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DireccionRoutingModule } from './direccion-routing.module';
import { ActiveButtonComponent } from '../../active-button/active-button.component';
import { CardContainerComponent } from '../../card-container/card-container.component';
import { DireccionComponent } from './direccion/direccion.component';
import { DireccionDetalleComponent } from './direccion-detalle/direccion-detalle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DireccionFormComponent } from './direccion-form/direccion-form.component';
import { FormInputComponent } from '../../form-input/form-input.component';
import { HttpClientModule } from '@angular/common/http';
import { DireccionService } from './services/direccion.service';


@NgModule({
  declarations: [
    DireccionComponent,
    DireccionDetalleComponent,
    DireccionFormComponent
  ],
  imports: [
    CommonModule,
    DireccionRoutingModule,
    ActiveButtonComponent,
    CardContainerComponent,
    FormInputComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DireccionService]
})
export class DireccionModule { }
