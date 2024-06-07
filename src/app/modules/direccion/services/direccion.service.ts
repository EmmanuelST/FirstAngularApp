import { Injectable } from '@angular/core';
import { Direccion } from '../../../models/direccion';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DireccionService {
  private direcciones: Array<Direccion> = new Array<Direccion>();
  baseUrl: string = "https://report-api.somee.com/api/addresses";

  constructor(private httpClient: HttpClient) {
  }

  getDireccionById(idDireccion: number): Observable<Direccion> {
    return this.httpClient.get<Direccion>(`${this.baseUrl}/${idDireccion}`).pipe(
      map(response => response),
      catchError(error => {
        console.log(error)
        return of(new Direccion())
      })
    );
  }

  getList(idCliente: any | undefined): Observable<Array<Direccion>> {
    const requestUrl = idCliente ? `${this.baseUrl}/getByCliente/${idCliente}` : this.baseUrl
    return this.httpClient.get<Array<Direccion>>(requestUrl).pipe(
      map(response => response),
      catchError(error => {
        console.log(error)
        return of([])
      })
    );
  }

  upsertDireccion(direccion: Direccion) {
    console.log(direccion);
    const url = "https://report-api.somee.com/api/addresses";
    const response = this.httpClient.post(url, direccion).subscribe({
      next: (value) => { console.log(value) },
      error: (error) => { console.log(error); }
    });
  }

  getLastId(): number {
    return this.direcciones.sort((a, b) => a.addressId - b.addressId).pop()?.addressId ?? 0;
  }
}

