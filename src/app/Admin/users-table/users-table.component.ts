import { UserDataService } from 'src/app/shared/dataService/user-data.service';
import { Component, OnInit } from '@angular/core';
import { Bills } from 'src/app/models/Bills';
import { ActivatedRoute, Router } from '@angular/router';
import { BillDataService } from 'src/app/shared/dataService/bill-data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  bills: Bills[];
  userId: string;
  constructor(private userData: UserDataService, private route: ActivatedRoute, private billdata: BillDataService,private router :Router , private location: Location) { }

  ngOnInit(): void {

    this.route.params.subscribe(res => {
      this.userId = res['id'];
      this.loadUserBills();
    })
  }


  loadUserBills() {
    this.billdata.getBills(this.userId).subscribe(res => {
      this.bills = res.documents.map(bill=>{
        return{
          id :bill.name.split('/').pop(),
          amount : bill.fields.amount.stringValue,
          date : bill.fields.date.stringValue,
          dueDate : bill.fields.dueDate.stringValue,
          type : bill.fields.type.stringValue,
          status : bill.fields.status.stringValue,
        }
      })

    })
  }

  navigate(){
    this.router.navigate(['/Add-Bill',this.userId]);
  }
  payBill(bill){
    this.billdata.getBillById(bill.id).subscribe((bills) => {
      // console.log(bills);
      {
        // console.log('before');
        const b = bills;
        const updatedBill = {
          id: b.name.split('/').pop(),
          amount: b.fields.amount.stringValue,
          date: b.fields.date.stringValue,
          dueDate: b.fields.dueDate.stringValue,
          type: b.fields.type.stringValue,
          status: b.fields.status.stringValue,
        };
        // console.log('updated bill' + updatedBill);
        this.billdata.updateBill(updatedBill).subscribe((res) => {
          // console.log('RESULT' + res);
        alert("Bill paid")
       // this.location.reload();
        });
        return updatedBill;
      }
    });
  }
  changeStatus() {
  
  }
}

