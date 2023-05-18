import { Component, OnInit } from '@angular/core';
import { Bills } from 'src/app/models/Bills';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { BillDataService } from 'src/app/shared/dataService/bill-data.service';

@Component({
  selector: 'app-paid-visa',
  templateUrl: './paid-visa.component.html',
  styleUrls: ['./paid-visa.component.css']
})
export class PaidVisaComponent implements OnInit {
  bills : Bills [];
  id;

  ngOnInit() {}
  constructor(private dataService:BillDataService , private auth: AuthService){
    this.auth.getCurrentUser().subscribe((res) => {
      this.id = res.uid;
      if (!this.id) return;
      this.getBills();
      console.log(this.id);
    });
  }
  
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
          return b.status === 'paid visa';
        });
    });
  }

}
