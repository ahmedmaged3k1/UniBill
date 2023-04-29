import { Component, OnInit } from '@angular/core';
import { BillDataService } from '../shared/dataService/bill-data.service';
import { Bills } from '../models/Bills';
import { map } from 'rxjs';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
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
  constructor(private dataService: BillDataService, private route: ActivatedRoute, private router: Router) {
    this.getBills();

  }
  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.billType = p['id']||'';
      console.log(this.billType);
      this.getBills()

    });
    // this.router.events.subscribe((event) => {

    //   if (event instanceof NavigationEnd) {




    //   }
    // });
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
      if (this.billType.toLowerCase() === "water") {
        console.log("aloo function water");

        this.getWaterBills();
      }

      else if (this.billType.toLowerCase() === "electricty") {
        console.log("aloo function electricity");
        this.getElectricityBills()

      }

      else if (this.billType.toLowerCase() === "telephone") {
        this.getTelephoneBills()
      }


    })

  }

  getElectricityBills() {

    let ElectricityBills = this.bills.filter(b => b.type.toLowerCase() === "electrcity");
    this.bills = ElectricityBills;
    console.log(this.bills);

  }
  getWaterBills() {
    let waterBills = this.bills.filter(b => b.type.toLowerCase() === "water")
    this.bills = waterBills;
    console.log(this.bills);

  }

  getTelephoneBills() {
    let telephoneBills = this.bills.filter(b => b.type.toLowerCase() === "telephone")
    this.bills = telephoneBills;
    console.log(this.bills);

  }






  recieveBill($event: Bills[]) {
    this.bills = $event
  }




}
