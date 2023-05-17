import { Component } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-email-validators',
  templateUrl: './email-validators.component.html',
  styleUrls: ['./email-validators.component.css']
})

export class EmailValidatorsComponent {
  static email(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value
    const pattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (value && !pattern.test(value)) {
      return {
        email: true
      }
    }
    else if (!value || value.length <= 0) {
      console.log("no input")
      return { email: true }
    }
    return null
  }
}
