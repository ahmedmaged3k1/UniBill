import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Bills } from 'src/app/models/Bills';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BillDataService {
  searchString: string;
  userId;
  billsUrl =
    'https://firestore.googleapis.com/v1/projects/unibell-5f28c/databases/(default)/documents/Users';
  path = '/Bills';
  electricityAmountPrice: string = '2';
  electricityOverdue: string = '200';
  waterAmountPrice: string = '5';
  waterOverdue: string = '100';
  telephoneAmountPrice: string = '7';
  telephoneOverdue: string = '300';
  billsRef: AngularFirestoreCollection<Bills>;
  constructor(
    private http: HttpClient,
    private afs: AngularFirestore,
    private auth: AuthService
  ) {
    this.billsRef = afs.collection(this.path);
    this.auth.getCurrentUser().subscribe((user) => {
      this.userId = user.uid;
    });

  }
  updateBill(bill: Bills): Observable<void> {
    const url = `${this.billsUrl}/${this.userId}/Bills/${bill.id}?updateMask.fieldPaths=status`;
    const data = {
      fields: {
        status: { stringValue: 'paid' },
      },
    };

    return this.http.patch<void>(url, data);
  }
  getBillByType(type: string, bill: Bills): Observable<Bills[]> {
    const url = `${this.billsUrl}/${this.userId}/Bills/?type=${type}`;
    const data = {
      fields: {
        type: { stringValue: type },
      },
      updateMask: {
        fieldPaths: ['type']
      }
    };
  
    return this.http.patch<void>(url, data).pipe(
      switchMap(() => {
        const billsUrl = `${this.billsUrl}/${this.userId}/Bills`;
        return this.http.get<Bills[]>(billsUrl).pipe(
          map((bills) => bills.filter((b) => b.type === type))
        );
      })
    );
  }
  
  searchBillsByType(type: string): Observable<Bills[]> {
    const url = `${this.billsUrl}/${this.userId}/Bills`;
    const params = new HttpParams().set('orderBy', `"type"`).append('equalTo', `"${type}"`);
  
    return this.http.get<{ [key: string]: Bills }>(url, { params }).pipe(
      map((res) => {
        const bills: Bills[] = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            bills.push({ ...res[key], id: key });
          }
        }
        return bills;
      }),
      
    );
  }
  
  
  
  getBills(id: string) {
    return this.http.get<any>(`${this.billsUrl}/${id}/Bills`);
  }
  getBillById(id: string) {
    return this.http.get<any>(`${this.billsUrl}/${this.userId}/Bills/${id}`);
  }
  addBill(bill,id) {
    return this.http.post<any>(`${this.billsUrl}/${id}/Bills`, bill)
  }
  searchBills(option: string) {
    return this.afs
      .collection(this.path, (ref) =>
        ref.where(option, '==', this.searchString)
      )
      .valueChanges();
  }
  searchBillById(id: string): Observable<Bills> {
    const url = `${this.billsUrl}/${this.userId}/Bills/${id}`;
    return this.http.get<Bills>(url);
  }
  
  searchByStatus() {
    return this.afs
      .collection(this.path, (ref) =>
        ref.where('status', '==', this.searchString)
      )
      .valueChanges();
  }



}
