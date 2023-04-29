import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillDataService } from '../dataService/bill-data.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  bill: any;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private billDataService: BillDataService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.loadBillById();
    });
  }

  loadBillById() {
    this.billDataService.getBillById(this.id).subscribe((res) => {
      this.bill = {
        amount: res.fields.amount.stringValue,
        notPaid: res.fields.amount.stringValue,
        dueDate: res.fields.dueDate.stringValue,
      };
      this.bill.notPaid = parseFloat(this.bill.amount) + 200;
      return this.bill;
    });
  }
}
