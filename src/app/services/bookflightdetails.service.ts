import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteBookingsUrl, postBookFlightUrl, reqBookFlightUrl } from '../constants';
import { BookFlight } from '../Model/BookFlight';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BookflightdetailsService {

  constructor(private http:HttpClient) { }

  bookflight:BookFlight[] = [];

  getFlightDetails(): Observable<any>{
    this.bookflight = [];
    return this.http.get(reqBookFlightUrl);
  }
  getFlightDetailsObservable(results:any): BookFlight[]{
  
    try {
    for (const u of results) {
        this.bookflight.push({
          id:u.id,
          name: u.name,
          emailID:u.emailID,
          noOfSeatsToBook:u.noOfSeatsToBook,
          mealType:u.mealType,
          seatNumber:u.seatNumber,
          discountcode:u.discountcode,
          triptype:u.triptype,
          fromPlace:u.fromPlace,
          toPlace:u.toPlace,
          startdatetime:u.startdatetime,
          totalPrice:u.totalPrice
        });
      }
    } catch (error) {
      console.error(error);
    }
    return this.bookflight;
  }
  bookFlight(addbookflight: BookFlight) {
    return this.http.post(postBookFlightUrl, addbookflight,httpOptions);
  }

  cancelFlight(id:number){
    console.log(id);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams().set("id", id);
    return this.http.delete<any>(DeleteBookingsUrl+"/"+id);
      
  }
}
