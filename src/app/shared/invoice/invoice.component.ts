import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private billDataService: BillDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.loadBillById();
    });
  }

  loadBillById() {
    this.billDataService.getBillById(this.id).subscribe((res) => {
      console.log(res);

      this.bill = {
        amount: res.fields.amount.stringValue,
        notPaid: res.fields.amount.stringValue,
        dueDate: res.fields.dueDate.stringValue,
        type: res.fields.type.stringValue,
      };
      this.bill.notPaid = parseFloat(this.bill.amount) + 200;
      console.log('this is the type' + ' ' + res.fields.type.stringValue);

      return this.bill;
    });
  }
  payPendingBill() {
    // Navigate to another component
    // console.log('id ' + this.id);

    this.router.navigate(['/Payment', this.id]);
  }
}
