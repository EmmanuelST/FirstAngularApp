import { Component } from '@angular/core';
import { Direccion } from '../../../models/direccion';
import { DireccionService } from '../services/direccion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-direccion',
  standalone: false,
  templateUrl: './direccion.component.html',
  styleUrl: './direccion.component.css'
})
export class DireccionComponent {

  direcciones: Array<Direccion> = new Array<Direccion>;

  constructor(private direccionService: DireccionService,
    private routeManager: ActivatedRoute) {

  }

  ngOnInit() {
    console.log("Direcciones inició");
    this.loadData();
  }
  

  loadData() {
    this.routeManager.params.subscribe(params => {
      console.log(params);
      this.direccionService.getList(params["id"]).subscribe({
        next: (value) => {
          this.direcciones = value;
        },
        error: (error) => {
          console.log(error);
        }
      });
    })
  }


  toggleActiveState(direccion: Direccion) {
    direccion.active = !direccion.active;
    this.direccionService.upsertDireccion(direccion);
  }
}
