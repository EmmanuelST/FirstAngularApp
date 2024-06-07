import { Injectable } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  baseUrl: string = "https://report-api.somee.com/api/clientes";
  private clientes: Cliente[] = [];
  constructor(private httpClient: HttpClient) {
  }

  getClienteById(clienteId: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.baseUrl}/${clienteId}`).pipe(
      map(response => response),
      catchError(error => {
        console.log(error)
        return of(new Cliente())
      })
    );
  }

  getClienteByIdNotObservable(clienteId: number): Cliente | undefined {
    const client = this.clientes.find(e => e.clienteId == clienteId);
    return client;
  }

  getList(): Observable<Array<Cliente>> {
    return this.httpClient.get<Array<Cliente>>(this.baseUrl).pipe(
      map(response => response),
      catchError(error => {
        console.log(error)
        return of([])
      })
    );
  }

  upsertCliente(cliente: Cliente) {
    console.log(cliente);
    this.httpClient.post(this.baseUrl, cliente).subscribe({
      next: (value) => { console.log(value) },
      error: (error) => { console.log(error); }
    });
  }
}
