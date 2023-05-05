import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
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
    console.log(this.paymentForm);
    this.paymentForm.markAllAsTouched();
    if (this.paymentForm.invalid) {
      alert('Please Submit Valid Data');
      return false;
    }
    return true;
  }
}
