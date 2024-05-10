import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-active-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './active-button.component.html',
  styleUrl: './active-button.component.css'
})
export class ActiveButtonComponent {

  @Input() active:Boolean = false;

  toggleActiveState() {
    this.active = !this.active;
  }
}
