import { Component } from '@angular/core';
import { Bills } from 'src/app/models/Bills';
import { BillDataService } from '../dataService/bill-data.service';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  constructor(private dataService: BillDataService) { }
  filterBy: string = '';
  searchedString : string
  bills : Bills

  @Output() billList = new EventEmitter<Bills[]>();
  ngOnInit(): void {
  }
  searchBills(){
    this.dataService.searchString=this.searchedString
    if(this.filterBy===null)this.filterBy="type"
    this.dataService.searchBillsByType(this.searchedString).subscribe(
      bill => {
        console.log('Found bill:', bill);
        this.billList.emit(bill)
      },
      error => {
        console.error('Error searching for bill:', error);
      }
    );
  
    
  }

  setFilter(option: string) {
    this.filterBy = option;
    alert("Search is set to be by "+option)
  }
}
/*
 this.dataService.searchBills(this.filterBy).subscribe((b: Bills[]) => {
      this.billList.emit(b)
    });

*/
