import { Component } from '@angular/core';
import { Direccion } from '../../../models/direccion';
import { DireccionService } from '../services/direccion.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-direccion',
  standalone: false,
  templateUrl: './direccion.component.html',
  styleUrl: './direccion.component.css'
})
export class DireccionComponent {

  direcciones: Observable<Array<Direccion>> = of(new Array<Direccion>);

  constructor(private direccionService: DireccionService, private routeManager: ActivatedRoute) {

  }

  ngOnInit() {
    this.routeManager.params.subscribe(params => {
      if (params["id"]) {
        this.direcciones = this.direccionService.getList(params["id"]);
      }
      else {
        this.direcciones = this.direccionService.getList(undefined);
      }
    })
  }


  toggleActiveState(direccion: Direccion) {
    direccion.active =  !direccion.active;
    this.direccionService.updateDireccion(direccion);
  }

}
