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
  // create a reset password component(Dialogue or another page) 
  //which takes the password for the current user as a 
  //confirmation(should match the user's password) and a new different
  // password with a confirmed one.If the password is changes successfully,
  // the user will be redirected to the home page and otherwise will show an 
  //error message for failing to change the password
  // shofto tamam
  /* 
3mlna component esmo password-rest
3obara 3n hagtern
Input text w button
Input bya5od  l password
W byro7 3la el auth.service
3mlna feha function bt3ml reset ll password w bt3ml l haga l matlooba
Lw l password sah
Laaaazm t3mly login mn el awl haty el login l awl 
B3d kda login 
Esm el email :
MadKingmrwhite@gmail.com
Password : 2222222
user tany :
am@gmail.com
123456 

//////////////////// 
lma t8yry el password e3mly logouy w 5oshy bl password l gdeda
لما تغيري هيتغير
*/
  login(){
    var option =1
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
