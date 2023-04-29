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
    this.router.navigate(['/Bill', billId]);
  }
  ngOnInit(): void {}
}
