import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDataService } from '../dataService/user-data.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private fireAuth: AngularFireAuth, private router: Router ,private http :HttpClient) { }
  usersUrl = 'https://firestore.googleapis.com/v1/projects/unibell-5f28c/databases/(default)/documents/Users'

  login(email: string, password: string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true')
      this.router.navigate(['/Dash-Board'])
    }, err => {
      alert('Something Went Wrong')
      this.router.navigate(['/login'])
    })
  }
  resetPassword(){
    
  }
  register(email: string, password: string, phoneNumber: string, name: string, postOrPre: number) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then((User) => {

      let userId = User.user.uid;

      let fields = {
        fields : {
          id:{stringValue :userId} ,
          name : {stringValue : name},
          phoneNumber : {stringValue :phoneNumber},
          postOrPre : {stringValue : postOrPre},
          email :{stringValue:email}
        }
      }
      console.log(fields);

      this.addUser(fields).subscribe(res=>{
        console.log(res);

      })
      this.router.navigate(['/login'])
    }, err => {
      alert(err.message)
      this.router.navigate(['/signup'])
    })
  }
  logout() {
    this, this.fireAuth.signOut().then(() => {
      localStorage.removeItem('token')
      this.router.navigate(['/login'])

    }, err => {
      alert(err.message)

    })
  }

  getCurrentUser() {
    return this.fireAuth.authState
  }
  addUser(user: any) {
    try{
      const {id,...rest}=user.fields;
      console.log(rest);
      console.log();

      return this.http.post<any>(`${this.usersUrl}?documentId=${id.stringValue}`,{fields:rest});
    }
    catch(err){
      console.log(err);
      return new Observable();
    }

  }

}
