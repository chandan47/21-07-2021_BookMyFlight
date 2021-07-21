import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { postAirlineUrl, reqAirlineUrl } from '../constants';
import { Airline } from '../Model/Airline';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AirlinedetailsService {

  constructor(private http:HttpClient) { }

  airline:Airline[] = [];

  getAirlines(): Observable<any>{
    this.airline = [];
    return this.http.get(reqAirlineUrl);
  }
  getAirlinesFromObservable(results:any):Airline[]{
    try {
    for (const u of results) {
        this.airline.push({
          flightNumber: u.flightNumber,
          airlineName: u.airlineName,
          uploadLogo: u.uploadLogo,
          fromPlace: u.fromPlace,
          toPlace:u.toPlace,
          startdatetime:u.startdatetime,
          enddatetime:u.enddatetime,
          scheduleddays:u.scheduleddays,
          instrumentUsed:u.instrumentUsed,
          tNoBusinessClassSeats:u.tNoBusinessClassSeats,
          tNoNonBusinessClassSeats:u.tNoNonBusinessClassSeats,
          ticketCost:u.ticketCost,
          numberofRows:u.numberofRows,
          meal:u.meal,
          isBlocked:u.isBlocked,
          status:u.status
        });
      }
    } catch (error) {
      console.error(error);
    }
    return this.airline;
  }
  addAirLine(addairline: Airline) {
    return this.http.post(postAirlineUrl, addairline,httpOptions);
  }
}
