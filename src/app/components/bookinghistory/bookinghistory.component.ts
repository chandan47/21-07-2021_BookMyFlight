import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookFlight } from 'src/app/Model/BookFlight';
import { BookflightdetailsService } from 'src/app/services/bookflightdetails.service';

@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements OnInit {
  errorMessage: any;
  bookflightModel : BookFlight={
    id:0,
    name:'',
    emailID:'',
    noOfSeatsToBook:0,
    mealType:'',
    seatNumber:0,
    discountcode:'',
    triptype:'',
    fromPlace:'Bangalore',
    toPlace:'Delhi',
    startdatetime:'',
    airlineName:'Kingfisher',
    totalPrice:0
  }

  constructor(private bservice:BookflightdetailsService,private router:Router) { }

  
  bookflight:BookFlight[] = [];

  ngOnInit(): void {
    
    this.bservice.getFlightDetails().subscribe(results=> this.bookflight = this.bservice.getFlightDetailsObservable(results));
  }

  delete(id:any):void {
    
    this.bservice.cancelFlight(id).subscribe(()=>this.onDeleted(), (error:any)=>this.errorMessage=<any>error );
    this.router.navigate(['/bookflight']);
  }

  onDeleted():void{
    console.log("Deleted Successfully");
    
    
  }
}
