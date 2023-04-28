import { Component, OnInit } from '@angular/core';
import { BillDataService } from '../shared/dataService/bill-data.service';
import { Bills } from '../models/Bills';
import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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
  billType: String = ''
  constructor(private dataService: BillDataService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.billType = this.route.snapshot.params['id'] || '';

    if (this.billType.toLowerCase() === "water") {
      this.getWaterBills();
    }

    else if (this.billType.toLowerCase() === "electricty") {
      this.getElectricityBills()
    }

    else if (this.billType.toLowerCase() === "telephone") {
      this.getTelephoneBills()
    }



  }
  getBills() {

    this.dataService.getBills().subscribe(res => {

      this.bills = res.documents.map(b => {
        let bill;
        bill = {
          date: b.fields.date.stringValue,
          amount: b.fields.amount.stringValue,
          dueDate: b.fields.dueDate.stringValue,
          status: b.fields.status.stringValue,
          type: b.fields.type.stringValue,
        }
        bill.id = b.name.split('/').pop();

        return bill


      })

    })

  }

  getElectricityBills() {

    let ElectricityBills = this.bills.filter(b => b.type.toLowerCase() === "electricty")
    return ElectricityBills;
  }
  getWaterBills() {



    let waterBills = this.bills.filter(b => b.type.toLowerCase() === "water")
    return waterBills;
  }

  getTelephoneBills() {
    let telephoneBills = this.bills.filter(b => b.type.toLowerCase() === "telephone")
    return telephoneBills;
  }





  recieveBill($event: Bills[]) {
    this.bills = $event
  }




}
