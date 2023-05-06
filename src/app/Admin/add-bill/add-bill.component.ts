import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BillDataService } from 'src/app/shared/dataService/bill-data.service';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css'],
})
export class AddBillComponent implements OnInit {
  form: FormGroup;

  constructor(private billData :BillDataService){

  }
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
    this.addBill()
    return true;
  }

  addBill(){
    const bill = {
      amount: {
        stringValue: this.form.get('amount').value.toString()
      },
      date: {
        stringValue: this.form.get('date').value.toString()
      },
      dueDate: {
        stringValue: this.form.get('dueDate').value.toString()
      },
      type: {
        stringValue: this.form.get('billType').value.toString()
      },
      status :{
        stringValue : "unpaid"
      }
    };
    const data = {
      fields : bill
    }
    console.log(bill);
    this.billData.addBill(data).subscribe(res=>{
      console.log(res);

    })

  }


}
