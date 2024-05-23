import { Component } from '@angular/core';
import { DireccionService } from '../services/direccion.service';
import { ActivatedRoute } from '@angular/router';
import { Direccion } from '../../../models/direccion';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-direccion-detalle',
  standalone: false,
  templateUrl: './direccion-detalle.component.html',
  styleUrl: './direccion-detalle.component.css'
})
export class DireccionDetalleComponent {

  direccion: Observable<Direccion | undefined> = of(undefined);

  constructor(direccionService: DireccionService, routeManager: ActivatedRoute) {
    routeManager.params.subscribe(params => {
      if (params["id"]) {
        this.direccion = direccionService.getDireccionById(params["id"])
      }
    })
  }
}
