import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  rangeValidator(min: number, max: number) {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const value = control.value
      if (value && (value.length > max || value.length < min)) {
        return { range: true }
      }
      return null
    }
  }

  adminForm: FormGroup = this.fb.group({
    username: [''],
    fname: ['', [this.rangeValidator(5, 10), Validators.required]],
    email: ['', [Validators.required, Validators.minLength(5), Validators.email, Validators.maxLength(15)]],
    contact: ['']
  })

  constructor(private fb: FormBuilder) { }

  get emailCheck() {
    return this.adminForm.get('email')
  }
}
