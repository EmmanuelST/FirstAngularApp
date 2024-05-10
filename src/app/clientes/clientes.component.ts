import { Component } from '@angular/core';
import { Cliente } from '../models/cliente';
import { CommonModule } from '@angular/common';
import { ActiveButtonComponent } from "../active-button/active-button.component";

@Component({
    selector: 'app-clientes',
    standalone: true,
    templateUrl: './clientes.component.html',
    styleUrl: './clientes.component.css',
    imports: [CommonModule, ActiveButtonComponent]
})
export class ClientesComponent {

  toggleActiveState(cliente: Cliente) {
    cliente.active = !cliente.active;
  }

  clientes: Cliente[] = [
    {
      clienteId: 1,
      name: 'Juan',
      lastName: 'Perez',
      cedula: '1234567890',
      birthDate: new Date('1990-01-01'),
      createAt: new Date(),
      email: 'juan@example.com',
      active: true,
      addresses: [
        {
          addressId: 1,
          alias: 'Casa',
          street: '123 Calle Principal',
          city: 'Ciudad Principal',
          state: 'Estado Principal',
          zipCode: '12345',
          country: 'País Principal',
          active: true,
          createAt: new Date('2024-05-07'),
          clienteId: 1
        },
        {
          addressId: 2,
          alias: 'Trabajo',
          street: '456 Avenida Laboral',
          city: 'Ciudad Laboral',
          state: 'Estado Laboral',
          zipCode: '54321',
          country: 'País Laboral',
          active: true,
          createAt: new Date('2024-05-07'),
          clienteId: 1
        }
      ]
    },
    {
      clienteId: 2,
      name: 'María',
      lastName: 'González',
      cedula: '0987654321',
      birthDate: new Date('1985-05-15'),
      createAt: new Date(),
      email: 'maria@example.com',
      active: true,
      addresses: [
        {
          addressId: 3,
          alias: 'Casa',
          street: '789 Calle Tranquila',
          city: 'Ciudad Serena',
          state: 'Estado de la Paz',
          zipCode: '98765',
          country: 'País de la Tranquilidad',
          active: true,
          createAt: new Date('2024-05-07'),
          clienteId: 2
        }
      ]
    },
    {
      clienteId: 3,
      name: 'Carlos',
      lastName: 'López',
      cedula: '1357924680',
      birthDate: new Date('1982-09-20'),
      createAt: new Date(),
      email: 'carlos@example.com',
      active: true,
      addresses: [
        {
          addressId: 4,
          alias: 'Casa de Campo',
          street: '321 Camino Rural',
          city: 'Pueblo Rural',
          state: 'Estado Campestre',
          zipCode: '24680',
          country: 'País Rural',
          active: true,
          createAt: new Date('2024-05-07'),
          clienteId: 3
        }
      ]
    },
    {
      clienteId: 4,
      name: 'Ana',
      lastName: 'Martínez',
      cedula: '2468135790',
      birthDate: new Date('1995-03-10'),
      createAt: new Date(),
      email: 'ana@example.com',
      active: true,
      addresses: [
        {
          addressId: 5,
          alias: 'Apartamento',
          street: '555 Calle del Centro',
          city: 'Ciudad Central',
          state: 'Estado Central',
          zipCode: '55555',
          country: 'País del Centro',
          active: true,
          createAt: new Date('2024-05-07'),
          clienteId: 4
        },
        {
          addressId: 6,
          alias: 'Oficina',
          street: '777 Avenida Ejecutiva',
          city: 'Ciudad Ejecutiva',
          state: 'Estado Ejecutivo',
          zipCode: '77777',
          country: 'País Ejecutivo',
          active: true,
          createAt: new Date('2024-05-07'),
          clienteId: 4
        }
      ]
    },
    {
      clienteId: 5,
      name: 'Pedro',
      lastName: 'Rodríguez',
      cedula: '3698521470',
      birthDate: new Date('1988-12-25'),
      createAt: new Date(),
      email: 'pedro@example.com',
      active: true,
      addresses: [
        {
          addressId: 7,
          alias: 'Casa de la Playa',
          street: '999 Avenida del Mar',
          city: 'Ciudad Costera',
          state: 'Estado Costero',
          zipCode: '99999',
          country: 'País Costero',
          active: true,
          createAt: new Date('2024-05-07'),
          clienteId: 5
        }
      ]
    },
    {
      clienteId: 6,
      name: 'Laura',
      lastName: 'Sánchez',
      cedula: '7418529630',
      birthDate: new Date('1980-07-18'),
      createAt: new Date(),
      email: 'laura@example.com',
      active: true,
      addresses: [
        {
          addressId: 8,
          alias: 'Casa',
          street: '111 Calle de la Montaña',
          city: 'Pueblo Montañoso',
          state: 'Estado Montañoso',
          zipCode: '11111',
          country: 'País Montañoso',
          active: true,
          createAt: new Date('2024-05-07'),
          clienteId: 6
        },
        {
          addressId: 9,
          alias: 'Cabaña',
          street: '222 Camino del Bosque',
          city: 'Bosque Encantado',
          state: 'Estado de la Naturaleza',
          zipCode: '22222',
          country: 'País Mágico',
          active: true,
          createAt: new Date('2024-05-07'),
          clienteId: 6
        }
      ]
    },
    {
      clienteId: 7,
      name: 'Sofía',
      lastName: 'Hernández',
      cedula: '5827149630',
      birthDate: new Date('1976-08-30'),
      createAt: new Date(),
      email: 'sofia@example.com',
      active: true,
      addresses: [
        {
          addressId: 10,
          alias: 'Casa',
          street: '333 Calle de la Paz',
          city: 'Ciudad de la Armonía',
          state: 'Estado Tranquilo',
          zipCode: '33333',
          country: 'País de la Armonía',
          active: true,
          createAt: new Date('2024-05-07'),
          clienteId: 7
        }
      ]
    },
    {
      clienteId: 8,
      name: 'Javier',
      lastName: 'Ramírez',
      cedula: '9517536240',
      birthDate: new Date('1983-04-12'),
      createAt: new Date(),
      email: 'javier@example.com',
      active: true,
      addresses: [
        {
          addressId: 11,
          alias: 'Casa',
          street: '444 Calle de la Comunidad',
          city: 'Ciudad Solidaria',
          state: 'Estado de la Cooperación',
          zipCode: '44444',
          country: 'País de la Colaboración',
          active: true,
          createAt: new Date('2024-05-07'),
          clienteId: 8
        }
      ]
    },
    {
      clienteId: 9,
      name: 'Elena',
      lastName: 'Gómez',
      cedula: '3692581470',
      birthDate: new Date('1992-11-05'),
      createAt: new Date(),
      email: 'elena@example.com',
      active: true,
      addresses: [
        {
          addressId: 12,
          alias: 'Casa',
          street: '555 Avenida de la Familia',
          city: 'Ciudad Familiar',
          state: 'Estado de la Familia',
          zipCode: '55555',
          country: 'País Familiar',
          active: true,
          createAt: new Date('2024-05-07'),
          clienteId: 9
        }
      ]
    },
    {
      clienteId: 10,
      name: 'Diego',
      lastName: 'Martín',
      cedula: '7854123690',
      birthDate: new Date('1998-02-28'),
      createAt: new Date(),
      email: 'diego@example.com',
      active: true,
      addresses: [
        {
          addressId: 13,
          alias: 'Casa',
          street: '777 Calle del Deporte',
          city: 'Ciudad Deportiva',
          state: 'Estado Deportivo',
          zipCode: '77777',
          country: 'País Deportivo',
          active: true,
          createAt: new Date('2024-05-07'),
          clienteId: 10
        },
        {
          addressId: 14,
          alias: 'Gimnasio',
          street: '999 Avenida del Entrenamiento',
          city: 'Ciudad del Fitness',
          state: 'Estado Fitness',
          zipCode: '99999',
          country: 'País del Fitness',
          active: true,
          createAt: new Date('2024-05-07'),
          clienteId: 10
        }
      ]
    }
  ];

}
