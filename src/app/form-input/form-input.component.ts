import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css'
})
export class FormInputComponent {

  @Input() name: string = "";
  @Input() labelName: string = "";
  @Input() type: string = "";
  @Input() placeHolder: string = "";
  @Input() formGroup!: FormGroup;

  isCheckbox: boolean = false;
  ccsClass: string = "";
  ngOnInit() {
    this.isCheckbox = this.type.includes("checkbox");
    this.ccsClass = this.isCheckbox ? "form-check-input" : "form-control";
  }

  getErrorMessage(): string {
    const control = this.formGroup.get(this.name)
    if (control == null) {
      return ''
    }

    let errorMessage = '';

    if (control.touched && control.invalid) {
      if(control.hasError('required')){
        errorMessage =`El campo ${this.labelName} es requerido`;
      }
      else if(control.hasError('minlength')){
        errorMessage =`El campo ${this.labelName} tiene menos caracteres que los permitidos`;
      }
      else if(control.hasError('maxlength')){
        errorMessage =`El campo ${this.labelName} tiene mas caracteres que los permitidos`;
      }
      else if(control.hasError('email')){
        errorMessage =`El campo ${this.labelName} no es valido`;
      }
    }
    return errorMessage
  }
}
