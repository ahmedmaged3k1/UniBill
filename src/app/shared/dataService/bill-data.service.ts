import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Bills } from 'src/app/models/Bills';

@Injectable({
  providedIn: 'root'
})
export class BillDataService {
  path = '/Bills'
  billsRef: AngularFirestoreCollection<Bills>
  constructor(private afs: AngularFirestore) {
    this.billsRef = afs.collection(this.path);
  }

  getBills() {
    return this.billsRef
  }
}
