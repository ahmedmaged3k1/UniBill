import { Component, OnInit } from '@angular/core';
import { BillDataService } from '../shared/dataService/bill-data.service';
import { Bills } from '../models/Bills';
import { map } from 'rxjs';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  bills: Bills[];
  date: String;
  amount: String;
  dueDate: String;
  status: String;
  type: String;
  constructor(private dataService: BillDataService) { }

  ngOnInit(): void {
    this.getBills();
  }
  getBills() {
    this.dataService.getBills().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(res=>{
        this.bills=res;
    })
  }






}
