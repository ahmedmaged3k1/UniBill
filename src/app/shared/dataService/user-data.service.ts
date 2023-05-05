import { AuthService } from './../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  usersUrl = 'https://firestore.googleapis.com/v1/projects/unibell-5f28c/databases/(default)/documents/Users'


  constructor(private afs: AngularFirestore, private http: HttpClient, private auth: AuthService) { }



  getUsers() {
    return this.http.get<any>(this.usersUrl);
  }

  getUserById(id: string) {
    return this.http.get<any>(`${this.usersUrl}/${id}`);

  }

}
