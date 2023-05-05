import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BillDataService } from '../dataService/bill-data.service';
import { Bills } from 'src/app/models/Bills';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  id;
  constructor(
    private dataService: BillDataService,
    private userInfo: AuthService,
    private route: ActivatedRoute
  ) {
    // this.userInfo.getCurrentUser().subscribe((res) => {
    //   this.id = res.uid;
    // });
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
  }

  bills: Bills[];
  changeStatus() {
    this.dataService.getBillById(this.id).subscribe((bills) => {
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
        this.dataService.updateBill(updatedBill).subscribe((res) => {
          // console.log('RESULT' + res);
        });
        return updatedBill;
      }
    });
  }

  paymentForm = new FormGroup({
    creditNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}'),
    ]),
    cardName: new FormControl('', Validators.required),
    expireDate: new FormControl('', Validators.required),
    cvvCode: new FormControl('', Validators.required),
  });
  onSubmit() {
    // console.log(this.paymentForm);
    this.paymentForm.markAllAsTouched();
    if (this.paymentForm.invalid) {
      alert('Please Submit Valid Data');
      return false;
    }
    this.changeStatus();
    return true;
  }
}
