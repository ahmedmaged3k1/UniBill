import { Component, Input } from '@angular/core';
import { BillDataService } from '../dataService/bill-data.service';
import { Bills } from 'src/app/models/Bills';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  constructor(private dataService: BillDataService, private router: Router) {}
  @Input() bills;
  @Input() searchedBills;

  navigateToBillDetails(billId: number) {
    if (this.bills[0].type === 'Electrcity') {
      this.router.navigate(['/ElectricityBill', billId]);
    } else if (this.bills[0].type === 'water') {
      this.router.navigate(['/ElectricityBill', billId]);
    } else if (this.bills[0].type === 'Telephone') {
      this.router.navigate(['/Telephone-Bill', billId]);
    }
    console.log('IN CONDITION' + ' ' + this.bills[0].type === 'Electrcity');
    console.log('IN TABLEEEEEEE' + ' ' + this.bills[0].type);
  }
  ngOnInit(): void {}
}
