import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BillDataService } from '../dataService/bill-data.service';
import { Bills } from 'src/app/models/Bills';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute , Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  id;
  option =0;
  loginForm: FormGroup;
  creditCard: string
  bankName : string
  cvvCode : string 
  expireDate: string
  constructor(
    private dataService: BillDataService,
    private userInfo: AuthService,
    private route: ActivatedRoute,
    private router: Router

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

       
        this.dataService.updateBill(updatedBill, this.option).subscribe((res) => {
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
    this.creditCard = this.paymentForm.get('creditNumber').value
    this.bankName = this.paymentForm.get('cardName').value
    this.cvvCode = this.paymentForm.get('cvvCode').value
    this.expireDate = this.paymentForm.get('expireDate').value
    console.log("credit card data is ", this.creditCard)
    console.log("bank name data is ", this.bankName)
    console.log("cvv code card data is ", this.cvvCode)
    console.log("expire date card data is ", this.expireDate)
    

  //  this.router.navigate(['/Dash-Board'])
    return true;
  }
  showPopup = false;
}
interface Visa {
  creditCard: string,
  bankName : string,
  cvvCode : string , 
  expireDate: string


}
