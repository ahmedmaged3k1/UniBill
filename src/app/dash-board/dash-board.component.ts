

import { Component, OnInit } from '@angular/core';
import { BillDataService } from '../shared/dataService/bill-data.service';
import { Bills } from '../models/Bills';

import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
import { UserDataService } from '../shared/dataService/user-data.service';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
})
export class DashBoardComponent implements OnInit {
  bills: Bills[];
  billType: String = '';
  isLoggedin: boolean;
  id;
  userPrice
  constructor(
    private dataService: BillDataService,
    private userService: UserDataService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) {
    this.checkRoute();

    this.checkLoggedIn().then(e => {
      this.getBills();
    }
    );
  }
  ngOnInit(): void {

    
  }
  logout(){
    this.auth.logout()
  }
  getBills() {
    this.dataService.getBills(this.id).subscribe(bills => {
      if (!bills.documents)
        return


      this.bills = bills.documents?.map(b => {
        if (b.fields.type.stringValue.toLowerCase() === "electricity") {
          this.userPrice = parseInt(b.fields.amount.stringValue) * parseInt(this.dataService.electricityAmountPrice)
        }
        else if (b.fields.type.stringValue.toLowerCase() === "water") {
          this.userPrice = parseInt(b.fields.amount.stringValue) * parseInt(this.dataService.waterAmountPrice)
        }
        else if (b.fields.type.stringValue.toLowerCase() === "telephone") {
          this.userPrice = parseInt(b.fields.amount.stringValue) * parseInt(this.dataService.telephoneAmountPrice)
        }
        console.log(this.userPrice);

        return {
          id: b.name.split('/').pop(),
          amount: b.fields.amount.stringValue,
          date: b.fields.date.stringValue,
          dueDate: b.fields.dueDate.stringValue,
          type: b.fields.type.stringValue,
          status: b.fields.status.stringValue,
          price: this.userPrice.toString()
        }

      });
      if (this.billType.toLowerCase() === "water") {
        this.getWaterBills();
      }
      else if (this.billType.toLowerCase() === "electricity") {


        this.getElectricityBills();
      }
      else if (this.billType.toLowerCase() === "telephone") {
        this.getTelephoneBills();
      }
    })

  }

  getElectricityBills() {
    console.log(this.bills);

    let ElectricityBills = this.bills?.filter(
      (b) => b.type.toLowerCase() === 'electricity'
    );
    console.log(ElectricityBills);

    this.bills = ElectricityBills;
  }
  getWaterBills() {
    let waterBills = this.bills.filter((b) => b.type.toLowerCase() === 'water');
    this.bills = waterBills;
    console.log(this.bills);
  }

  getTelephoneBills() {
    let telephoneBills = this.bills.filter(
      (b) => b.type.toLowerCase() === 'telephone'
    );
    this.bills = telephoneBills;
    console.log(this.bills);
  }

  recieveBill($event: Bills[]) {
    this.bills = $event;
  }

  checkRoute() {
    this.route.params.subscribe((p) => {
      this.billType = p['id'] || '';

      this.getBills();
    });
  }

  checkLoggedIn() {
    return new Promise(res => {
      this.auth.getCurrentUser().subscribe(user => {


        if (user) {
          this.isLoggedin = true;
          this.id = user.uid;
          res(user.uid)
        }
        else {
          this.isLoggedin = false;
          res('')
        }
      })
    })
  }
}
