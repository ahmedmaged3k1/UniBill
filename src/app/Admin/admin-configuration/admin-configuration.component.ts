import { Component } from '@angular/core';
import { BillDataService } from 'src/app/shared/dataService/bill-data.service';

@Component({
  selector: 'app-admin-configuration',
  templateUrl: './admin-configuration.component.html',
  styleUrls: ['./admin-configuration.component.css']
})
export class AdminConfigurationComponent {
  electricityAmount:string;
  electricityOverdue:string;
  waterAmount:string;
  waterOverdue:string;
  telephoneAmount:string;
  telephoneOverdue:string;
  constructor(private billData :BillDataService ){

  }

  onSave(){
    this.billData.electricityAmountPrice=this.electricityAmount;
    this.billData.electricityOverdue=this.electricityOverdue;
    this.billData.waterAmountPrice=this.waterAmount;
    this.billData.waterOverdue=this.waterOverdue;
    this.billData.telephoneAmountPrice=this.telephoneAmount;
    this.billData.telephoneOverdue=this.telephoneOverdue;
    alert("Configration Changed")
  }
}
