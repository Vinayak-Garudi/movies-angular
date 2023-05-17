import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  adminForm: FormGroup = this.fb.group({
    username: [''],
    fname: [''],
    email: ['', [Validators.required, Validators.minLength(5), Validators.email, Validators.maxLength(15)]],
    contact: ['']
  })

  constructor(private fb: FormBuilder) {}

  get emailCheck() {
    return this.adminForm.get('email')
  }
}
