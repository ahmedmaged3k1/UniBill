import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Route, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth : AngularFireAuth, private router : Router) { }

  login(email : string , password : string ){
    this.fireAuth.signInWithEmailAndPassword(email,password).then( () => {
      localStorage.setItem('token' , 'true')
      this.router.navigate(['/Dash-Board'])
    }, err => { 
      alert('Something Went Wrong')
      this.router.navigate(['/login'])
    })
  }
  register(email : string , password : string  ){
    this.fireAuth.createUserWithEmailAndPassword(email,password).then( () => { 
      alert('Registeration Successful')
      this.router.navigate(['/login'])
    } , err => { 
      alert(err.message)
      this.router.navigate(['/signup'])
    }) 
  }
  logout(){
    this,this.fireAuth.signOut().then ( () =>{
      localStorage.removeItem('token')
      this.router.navigate(['/login'])

    }, err =>{
      alert(err.message)

    })
  }


}
