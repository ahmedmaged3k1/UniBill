import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Bills } from 'src/app/models/Bills';

@Injectable({
  providedIn: 'root'
})
export class BillDataService {
  searchString : string
  path = '/Bills'
  billsRef: AngularFirestoreCollection<Bills>
  constructor(private afs: AngularFirestore) {
    this.billsRef = afs.collection(this.path);
  }
  getBills() {
    return this.billsRef
  }
  getByID(productId : string){
   
}
searchByName() {
  return this.afs.collection(this.path, ref => ref.where('type', '==', this.searchString)).valueChanges();

}

}
