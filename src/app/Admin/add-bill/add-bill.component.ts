import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bills } from 'src/app/models/Bills';
import { BillDataService } from 'src/app/shared/dataService/bill-data.service';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css'],
})
export class AddBillComponent implements OnInit {
  form: FormGroup;
  newBill : Bills
  constructor( private billdata: BillDataService){}
  ngOnInit(): void {
    this.form = new FormGroup({
      billType: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      dueDate: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      alert('Please Submit Valid Data');
      return false;
    }
    this.saveBillData()
    this.addBill()
    return true;
  }

  addBill(): void {
    this.billdata.addBill(this.newBill)
      .subscribe(() => {
        console.log('New bill added successfully.');
        // do any other required operations here
      }, error => {
        console.error('Error adding new bill:', error);
        // handle the error here
      });
  }
  saveBillData() {
    const randomId = this.getRandomInt(1, 100000).toString()
    this.newBill = {
      id: randomId,
      amount: this.form.get('amount').value,
      date: this.form.get('date').value,
      dueDate: this.form.get('dueDate').value,
      status: "unpaid",
      type: this.form.get('billType').value,
     
    };
  }
  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
