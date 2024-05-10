import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { DireccionComponent } from "./direccion/direccion.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ClientesComponent, NavbarComponent, DireccionComponent]
})
export class AppComponent {
  title = 'my-app';
}
