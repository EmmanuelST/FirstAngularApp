import { Component } from '@angular/core';
import { Direccion } from '../models/direccion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-direccion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './direccion.component.html',
  styleUrl: './direccion.component.css'
})
export class DireccionComponent {
  direcciones: Direccion[] = [
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
      alias: 'Oficina',
      street: '456 Avenida Secundaria',
      city: 'Ciudad Secundaria',
      state: 'Estado Secundario',
      zipCode: '54321',
      country: 'País Secundario',
      active: true,
      createAt: new Date('2024-05-07'),
      clienteId: 2
    },
    {
      addressId: 3,
      alias: 'Casa de Verano',
      street: '789 Calle de la Playa',
      city: 'Ciudad de la Playa',
      state: 'Estado de la Playa',
      zipCode: '67890',
      country: 'País de la Playa',
      active: true,
      createAt: new Date('2024-05-07'),
      clienteId: 3
    },
    {
      addressId: 4,
      alias: 'Apartamento',
      street: '101 Apartamentos Delux',
      city: 'Ciudad de Ensueño',
      state: 'Estado de Ensueño',
      zipCode: '10101',
      country: 'País de Ensueño',
      active: true,
      createAt: new Date('2024-05-07'),
      clienteId: 4
    },
    {
      addressId: 5,
      alias: 'Casa de la Abuela',
      street: '111 Calle Tranquila',
      city: 'Ciudad Serena',
      state: 'Estado de la Paz',
      zipCode: '11111',
      country: 'País de la Armonía',
      active: true,
      createAt: new Date('2024-05-07'),
      clienteId: 5
    },
    {
      addressId: 6,
      alias: 'Chalet de Montaña',
      street: '222 Camino Empinado',
      city: 'Ciudad de la Montaña',
      state: 'Estado de la Altura',
      zipCode: '22222',
      country: 'País de las Cumbres',
      active: true,
      createAt: new Date('2024-05-07'),
      clienteId: 6
    },
    {
      addressId: 7,
      alias: 'Condominio',
      street: '333 Urbanización Segura',
      city: 'Ciudad Segura',
      state: 'Estado Protegido',
      zipCode: '33333',
      country: 'País de la Tranquilidad',
      active: true,
      createAt: new Date('2024-05-07'),
      clienteId: 7
    },
    {
      addressId: 8,
      alias: 'Piso Compartido',
      street: '444 Calle de la Comunidad',
      city: 'Ciudad Solidaria',
      state: 'Estado de la Cooperación',
      zipCode: '44444',
      country: 'País de la Colaboración',
      active: true,
      createAt: new Date('2024-05-07'),
      clienteId: 8
    }
  ];

  toggleActiveState(direccion: Direccion) {
    direccion.active = !direccion.active;
  }
}
