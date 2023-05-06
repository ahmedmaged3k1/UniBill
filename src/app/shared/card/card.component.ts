import { Component, Input, OnInit } from '@angular/core';
import { Bills } from 'src/app/models/Bills';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() bill: Bills
  imgSrc: String;

  constructor() {

  }
  ngOnInit(): void {


    if (this.bill.type.toLowerCase() === "water") {

      this.imgSrc = "../../../assets/BlueWater.svg";
    }

    else if (this.bill.type.toLowerCase() === "electricity") {
      this.imgSrc = "../../../assets/Electrcity.svg";



    }
    else if (this.bill.type.toLowerCase() === "telephone") {
      this.imgSrc = "../../../assets/telephone.svg";

    }


  }
}
