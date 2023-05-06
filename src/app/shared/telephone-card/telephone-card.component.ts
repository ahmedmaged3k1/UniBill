import { Component } from '@angular/core';
import { OfferServiceService } from '../dataService/offer-service.service';

@Component({
  selector: 'app-telephone-card',
  templateUrl: './telephone-card.component.html',
  styleUrls: ['./telephone-card.component.css']
})
export class TelephoneCardComponent {
  vodaOffers;
  weOffers;
  etisalatOffers;

  constructor(private offers: OfferServiceService) {
    this.loadOffers('Etisalat');
    this.loadOffers('vodaphone');
    this.loadOffers('Telecom-Egypt');


  }

  loadOffers(company) {
    this.offers.getOffers(company).subscribe((res: any) => {
      if (company === "vodaphone") {
        console.log("inside vodaphone");

        this.vodaOffers = res.documents.map(off => {
          const [name, value]: any[] = Object.entries(off.fields)[0]
          return {
            offerHeader: name,
            offerDetail: value.arrayValue.values.map(det => det.stringValue)
          }
        })
      }
      else if (company === "Etisalat") {
        console.log("inside etisislat");
        this.etisalatOffers = res.documents.map(off => {
          const [name, value]: any[] = Object.entries(off.fields)[0]
          console.log(value);
          return {
            offerHeader: name,
            offerDetail: value.arrayValue.values.map(det => det.stringValue)
          }
        })
      }
      else if (company === "Telecom-Egypt") {
        console.log("inside Vodaphone");

        this.weOffers = res.documents.map(off => {
          console.log(Object.entries(off.fields)[0]);

          const [name, value]: any[] = Object.entries(off.fields)[0]
          console.log(value);

          return {

            offerHeader: name,
            offerDetail: value.arrayValue.values.map(det => det.stringValue)
          }
        })
      }
      // console.log(this.vodaOffers);

    })
  }
}



