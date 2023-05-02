import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Bills } from 'src/app/models/Bills';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class BillDataService {
  searchString: string;
  billsUrl =
    'https://firestore.googleapis.com/v1/projects/unibell-5f28c/databases/(default)/documents/Bills';
    path = '/Bills'
    billsRef: AngularFirestoreCollection<Bills>
  constructor(private http: HttpClient, private afs: AngularFirestore) {
    this.billsRef = afs.collection(this.path);
  }
  getBills() {
    return this.http.get<any>(this.billsUrl);
  }
  getBillById(id: string) {
    return this.http.get<any>(`${this.billsUrl}/${id}`);
  }
  
  searchByType() {
    return this.afs.collection(this.path, ref => ref.where('type', '==', this.searchString)).valueChanges();
  
  }
}
