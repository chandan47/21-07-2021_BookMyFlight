import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BlockAirlineUrl, getAirlineByIdUrl, postAirlineUrl, reqAirlineUrl, searchFlightUrl } from '../constants';
import { Airline } from '../Model/Airline';
import { HttpHeaders } from '@angular/common/http';
import { searchFlight } from '../Model/SearchFlight';
import { BookFlight } from '../Model/BookFlight';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AirlinedetailsService {
  public bookFlightDetails : BookFlight = new BookFlight();
  constructor(private http:HttpClient) { }
  SearchFlight:searchFlight[] = [];
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

  searchFlight(SearchFlight: searchFlight) { 
    this.airline = [];
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
      
      let params = new HttpParams().set("flightNumber", SearchFlight.flightNumber.valueOf()).set("fromPlace",SearchFlight.fromPlace).set("toPlace", SearchFlight.toPlace); //Create new HttpParams
      return this.http.get(searchFlightUrl, {headers,params});
    }

    
    BlockOrUnblockAirline(flightNumber: number,isBlocked : boolean) {​​​​​​​
  console.log(flightNumber+ " "+isBlocked);
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  let params = new HttpParams().set("flightNumber", flightNumber).set("IsBlocked",isBlocked);
 
  return this.http.put<any>(BlockAirlineUrl+"/"+flightNumber+"/"+isBlocked,"");
}​​​​​​​

getairlinesbyFlightNumber(FlightNumber:number):Observable<any>{
 
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  let params = new HttpParams().set("FlightNumber",FlightNumber);
  
  return this.http.get(getAirlineByIdUrl, {headers,params});
  }
  
  getAirlinesFromObservableForBookFlight(results:any):BookFlight{
  console.log(results);
  console.log("hi");
  try {
  this.bookFlightDetails = new BookFlight(0,'','',0,'',0,'','',results.fromPlace,results.toPlace,results.startdatetime,results.airlineName,results.ticketCost);
  }
  catch (error: any) {
  console.error(error);
  }
  console.log(this.bookFlightDetails);
  
  return this.bookFlightDetails;
  }

}
