import { Component, Input } from '@angular/core';
import { BillDataService } from '../dataService/bill-data.service';
import { Bills } from 'src/app/models/Bills';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  constructor(private dataService: BillDataService) { }
  @Input() bills;
  @Input() searchedBills;
  ngOnInit(): void {
  }
  
  
}
