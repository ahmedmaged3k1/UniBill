import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfferServiceService {
  offersUrl = 'https://firestore.googleapis.com/v1/projects/unibell-5f28c/databases/(default)/documents'
  constructor(private http :HttpClient) { }


  getOffers(company){
    console.log(`${this.offersUrl}/${company}`);

    return this.http.get(`${this.offersUrl}/${company}`)
  }

}
