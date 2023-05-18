import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth/auth.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  // Firebase Auth Elements 
  email : string = ' ';
  password : string = ' ';
constructor(private auth : AuthService,private router : Router){}

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
    if(!this.validateData()) return
    if(!this.adminModule()) return

    try{
      this.auth.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value)
    }
    catch  (error) {
      alert(error.message);

    }

  }
  validateData(): Boolean{
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      alert('Please Submit Valid Data');
      return false
    }
    return true
  }
  // Firebase Functions 
  //noran
  
  login(){
    this.loginForm
    this.auth.login(this.email, this.password)
  }
  adminModule(): Boolean{
    if(this.validateAdminLogin())
    {
      this.router.navigate(['/admin'])
      return false

    }
    return true
  }
  validateAdminLogin(): Boolean{
    if(this.loginForm.get('email')?.value ==='admin@gmail.com'&&
    this.loginForm.get('password')?.value=== '123456')
    {
      return true  
    }
    else return false
  }
  navigate(){
    this.router.navigate(['/signup'])
  }
}
