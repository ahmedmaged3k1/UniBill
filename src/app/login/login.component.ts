import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.min(4),
      ]),
      password: new FormControl(null, [Validators.required, Validators.min(4)]),
    });
  }
  onSubmit() {
    console.log(this.loginForm);

    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      alert('Please Submit Valid Data');
    }
  }
}
