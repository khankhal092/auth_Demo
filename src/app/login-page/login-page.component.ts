import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// const data = [
//   {
//     email: 'khankhal@gmail.com',
//     password: 'khankhal@001',
//     role: 'admin'
//   },
//   {
//     email: 'dhaval@gmail.com',
//     password: 'dhaval@001',
//     role: 'user'
//   },
//   {
//     email: 'jay@gmail.com',
//     password: 'jay@001',
//     role: 'admin'
//   },
//   {
//     email: 'nikuj@gmail.com',
//     password: 'nikuj@001',
//     role: 'user'
//   }
// ]

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  signUp: any[] = [];

  Form!: FormGroup;

  constructor(public fb: FormBuilder) {
    this.signUp = JSON.parse(localStorage.getItem('signUpData') || '[]');
    // localStorage.setItem('signUpData', JSON.stringify(data));
    console.log(this.signUp);

  }

  ngOnInit(): void {
    this.Form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    debugger
    if (this.Form.valid) {
      const userData = this.signUp.find(item => {
        return (item.email && item.password === this.Form.value)
      })
    } else {

    }
  }
}
