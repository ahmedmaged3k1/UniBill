import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillDataService } from '../dataService/bill-data.service';
import { UserDataService } from '../dataService/user-data.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent implements OnInit {
  bill: any;
  id: string;
  isTele: boolean;
  userId: string;
  email: string;
  name: string;
  phoneNumber: string;
  constructor(
    private route: ActivatedRoute,
    private billDataService: BillDataService,
    private router: Router,
    private userInfo: UserDataService,
    private auth: AuthService
  ) {
    this.auth.getCurrentUser().subscribe((res) => {
      this.userId = res.uid;
      // console.log(this.userId);
      if (!this.userId) return;
      this.getUserInfo();
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.loadBillById();
    });
  }
  getUserInfo() {
    this.userInfo.getUserById(this.userId).subscribe((res) => {
      this.name = res.fields.name.stringValue;
      this.email = res.fields.email.stringValue;
      this.phoneNumber = res.fields.phoneNumber.stringValue;
      // console.log(res.fields);
      // console.log(this.userId);
    });
  }
  loadBillById() {
    this.billDataService.getBillById(this.id).subscribe((res) => {
      // console.log(res);

      this.bill = {
        id: res.name.split('/').pop(),
        amount: res.fields.amount.stringValue,
        notPaid: res.fields.amount.stringValue,
        dueDate: res.fields.dueDate.stringValue,
        type: res.fields.type.stringValue,
      };
      if(this.bill.type.toLowerCase()==="telephone"){
        this.isTele = true;
        console.log(this.isTele);

      }

      // console.log('this is the type' + ' ' + res.fields.type.stringValue);
      return this.bill;
    });
  }
  payPendingBill() {
    // Navigate to another component
    // console.log('id ' + this.id);

    this.router.navigate(['/Payment', this.id]);
  }
  viewPlans(){
    this.router.navigate(['/Telephone-Card']);
  }
}
