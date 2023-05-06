import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillDataService } from '../shared/dataService/bill-data.service';
import { Bills } from '../models/Bills';

@Component({
  selector: 'app-electricity-invoice',
  templateUrl: './electricity-invoice.component.html',
  styleUrls: ['./electricity-invoice.component.css'],
})
export class ElectricityInvoiceComponent implements OnInit {
  constructor(
    private dataService: BillDataService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.getBills();
  }
  bills: Bills;
  id;
  billType: string = '';

  getBills() {
    this.dataService.getBillById(this.id).subscribe((bill) => {
      this.bills = {
        ...this.bills,
        id: bill.name.split('/').pop(),
        type: bill.fields.type.stringValue,
      };

      if (this.bills.type.toLowerCase() === 'water') {
        this.billType = 'Water';
      } else if (this.bills.type.toLowerCase() === 'electricity') {
        this.billType = 'Electricity';
      }
    });
  }
}
