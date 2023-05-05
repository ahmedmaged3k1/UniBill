import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth/auth.service';
import { UserDataService } from '../shared/dataService/user-data.service';
import { User } from 'src/app/models/user';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  // Firebase Auth Elements
  email: string = ' ';
  password: string = ' ';
  newUser: User;

  constructor(
    private auth: AuthService,
    private dataService: UserDataService,
    private router: Router
  ) { }


  ngOnInit() {
    this.signupForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      billingSystem: new FormControl('', Validators.required),
    });
  }



  onSubmit() {
    if (!this.validateData()) return
    this.saveUserData()
    this.register()
  }
  register() {
    try {
      this.auth.register(
        this.signupForm.get('email')?.value,
        this.signupForm.get('password')?.value,
        this.signupForm.get('phone')?.value,
        this.signupForm.get('fullName')?.value,
        this.signupForm.get('billingSystem')?.value,

      );
    

    } catch (error) {
      alert(error.message);
    }
  }
  saveUserData() {
    const randomId = this.getRandomInt(1, 100000).toString()
    this.newUser = {
      id: randomId,
      email: this.signupForm.get('email').value,
      password: this.signupForm.get('password').value,
      name: this.signupForm.get('fullName').value,
      phoneNumber: this.signupForm.get('phone').value,
      paymentType: this.signupForm.get('billingSystem').value,
    };
  }
  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  validateData(): Boolean {
    this.signupForm.markAllAsTouched();
    if (this.signupForm.invalid) {
      alert('Please Submit Valid Data');
      return false
    }
    return true
  }
  navigate() {
    this.router.navigate(['/login'])
  }
}
