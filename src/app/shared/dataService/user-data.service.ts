import { Injectable } from '@angular/core';
import{AngularFirestore } from '@angular/fire/compat/firestore'
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private afs :  AngularFirestore) { }

  addUser(user : User){
    return this.afs.collection('/Users').add(user)
  }
}
