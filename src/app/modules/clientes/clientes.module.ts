import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes/clientes.component';
import { ActiveButtonComponent } from '../../active-button/active-button.component';
import { CardContainerComponent } from '../../card-container/card-container.component';
import { ClienteDetalleComponent } from './cliente-detalle/cliente-detalle.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { FormInputComponent } from '../../form-input/form-input.component';


@NgModule({
  declarations: [
    ClientesComponent,
    ClienteDetalleComponent,
    ClienteFormComponent
  ],
  imports: [
    RouterOutlet,
    CommonModule,
    ClientesRoutingModule,
    ActiveButtonComponent,
    CardContainerComponent,
    FormInputComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientesModule { }
