import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  usersUrl = 'https://firestore.googleapis.com/v1/projects/unibell-5f28c/databases/(default)/documents/Users'


  constructor(private afs: AngularFirestore, private http: HttpClient) { }

  addUser(user: User) {
    return this.afs.collection('/Users').add(user)
  }

  getUsers() {
    return this.http.get<any>(this.usersUrl);
  }

  getUserById(id: string) {
    return this.http.get<any>(`${this.usersUrl}/${id}`);

  }
  getUserBill(id: string) {
    let bills;
    return this.getUserById(id);
  }
}
