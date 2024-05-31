import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.css'
})
export class CardContainerComponent {
  @Input() title: String = "";
  @Input() newButtonRoute: string | undefined;

}
