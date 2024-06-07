import { Component } from '@angular/core';
import { DireccionService } from '../services/direccion.service';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private direccionService: DireccionService, private routeManager: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.routeManager.params.subscribe(params => {
      if (params["id"]) {
        this.direccion = this.direccionService.getDireccionById(params["id"]);
      }
      else{
        this.direccion = of(new Direccion());
      }
    })
  }

  onClickEvent(direccion: Direccion)
  {
    this.routeManager.params.subscribe(params => {
      if (params["id"]) {
        this.submitChanges(direccion)
      }
      else{
        this.insertItem(direccion);
      }
    })
  }

  submitChanges(direccion: Direccion) {
    this.direccionService.upsertDireccion(direccion);
    this.router.navigate(['/direcciones']);
  }

  insertItem(direccion: Direccion) {

    direccion.addressId = this.direccionService.getLastId() + 1;
    this.direccionService.upsertDireccion(direccion);
    this.router.navigate(['/direcciones']);
  }
}
