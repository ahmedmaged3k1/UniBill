import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Bills } from 'src/app/models/Bills';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BillDataService {
  searchString: string;
  billsUrl =
    'https://firestore.googleapis.com/v1/projects/unibell-5f28c/databases/(default)/documents/Users';
  path = '/Bills';
  billsRef: AngularFirestoreCollection<Bills>;
  constructor(private http: HttpClient, private afs: AngularFirestore) {
    this.billsRef = afs.collection(this.path);
  }
  updateBill(bill: Bills): Observable<void> {
    const url = `${this.billsUrl}/${bill.id}/Bills`;
    // const data = { ...bill, status: 'paid' };
    const data = { status: 'paid' };
    return this.http.put<void>(url, data);
  }
  getBills(id: string) {
    return this.http.get<any>(`${this.billsUrl}/${id}/Bills`);
  }
  getBillById(id: string) {
    return this.http.get<any>(`${this.billsUrl}/${id}`);
  }

  searchBills(option: string) {
    return this.afs
      .collection(this.path, (ref) =>
        ref.where(option, '==', this.searchString)
      )
      .valueChanges();
  }
  searchByStatus() {
    return this.afs
      .collection(this.path, (ref) =>
        ref.where('status', '==', this.searchString)
      )
      .valueChanges();
  }
}
