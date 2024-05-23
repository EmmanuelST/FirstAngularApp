import { Component } from '@angular/core';
import { Direccion } from '../../../models/direccion';
import { DireccionService } from '../services/direccion.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-direccion',
    standalone: false,
    templateUrl: './direccion.component.html',
    styleUrl: './direccion.component.css'
})
export class DireccionComponent {

  constructor(direccionService: DireccionService,routeManager: ActivatedRoute){
      
      routeManager.params.subscribe(params => {
        if(params["id"]){
          this.direcciones = direccionService.getList(params["id"]);
        }
        else{
          this.direcciones = direccionService.getList(undefined);
        }
      })
  }


  direcciones :Direccion[] = [];

  toggleActiveState(direccion: Direccion) {
    direccion.active = !direccion.active;
  }
}
