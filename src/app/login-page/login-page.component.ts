import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginMode: boolean = true;

  Form: FormGroup | undefined

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {

  }

  onSwitch() {
    this.loginMode = !this.loginMode
  }
}
