import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { DireccionComponent } from "./modules/direccion/direccion/direccion.component";
import { ClientesModule } from './modules/clientes/clientes.module';
import { DireccionModule } from './modules/direccion/direccion.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,ClientesModule, NavbarComponent, DireccionModule]
})
export class AppComponent {
  title = 'my-app';
}
