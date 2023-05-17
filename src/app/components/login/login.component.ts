import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { EmailValidatorsComponent } from '../email-validators/email-validators.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authForm: any
  emailEntered !: string | undefined
  passwordEntered !: string | undefined
  invalidCred: boolean = this.userData.invalidCred

  constructor(private userData: UserDetailsService, private formBuilder: FormBuilder) {
    this.authForm = this.formBuilder.group({
      email: ['', [EmailValidatorsComponent.email]],
      password: ['']
    })
  }

  login() {
    if (this.authForm.get('email').value && this.authForm.get('password').value) {
      this.userData.handleLogin(this.authForm.get('email').value, this.authForm.get('password').value)
      this.invalidCred = this.userData.invalidCred
    }
  }

  emailChange(email: any) {
    this.emailEntered = email
  }

  passwordChange(password: any) {
    this.passwordEntered = password
  }
}
