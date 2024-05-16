import { Component } from '@angular/core';
import { CardContainerComponent } from "../../../card-container/card-container.component";
import { DireccionService } from '../services/direccion.service';
import { ActivatedRoute } from '@angular/router';
import { Direccion } from '../../../models/direccion';

@Component({
    selector: 'app-direccion-detalle',
    standalone: false,
    templateUrl: './direccion-detalle.component.html',
    styleUrl: './direccion-detalle.component.css'
})
export class DireccionDetalleComponent {
  constructor(direccionService:DireccionService, routeManager: ActivatedRoute){
    routeManager.params.subscribe(params => {
      if(params["id"]){
        this.direccion = direccionService.getDireccion(params["id"])
      }
    })
      
  }

  direccion:Direccion = new Direccion();
}
