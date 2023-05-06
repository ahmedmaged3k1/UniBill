import { Component, Input, OnInit } from '@angular/core';
import { Bills } from '../models/Bills';
import { BillDataService } from '../shared/dataService/bill-data.service';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  id;
  constructor(private dataService: BillDataService, private auth: AuthService) {
    this.auth.getCurrentUser().subscribe((res) => {
      this.id = res.uid;
      if (!this.id) return;
      this.getBills();
      console.log(this.id);
    });
  }

  ngOnInit() {}

  bills: Bills[];
  getBills() {
    // console.log('inside function');
    this.dataService.getBills(this.id).subscribe((bills) => {
      console.log(bills);
      this.bills = bills.documents
        ?.map((b) => {
          return {
            id: b.name.split('/').pop(),
            amount: b.fields.amount.stringValue,
            date: b.fields.date.stringValue,
            dueDate: b.fields.dueDate.stringValue,
            type: b.fields.type.stringValue,
            status: b.fields.status.stringValue,
          };
        })
        .filter((b) => {
          return b.status === 'paid';
        });
    });
  }
}
