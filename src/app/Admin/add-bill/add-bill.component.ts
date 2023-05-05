import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css'],
})
export class AddBillComponent implements OnInit {
  form: FormGroup;

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
    return true;
  }
}
