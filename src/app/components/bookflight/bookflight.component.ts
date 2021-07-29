import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookFlight } from 'src/app/Model/BookFlight';
import { AirlinedetailsService } from 'src/app/services/airlinedetails.service';
import { BookflightdetailsService } from 'src/app/services/bookflightdetails.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-bookflight',
  templateUrl: './bookflight.component.html',
  styleUrls: ['./bookflight.component.css']
})
export class BookflightComponent implements OnInit {

  public mealTypes=['veg','non-veg','none'];

  public toPlaces=['Delhi','Mumbai'];
  public fromPlaces=['Bangalore','Goa'];

  submitted:boolean=false;
  eRegisterForm:FormGroup=new FormGroup({});
  errorMessage: any;
  bookflightModel : BookFlight={
    name:'',
    emailID:'',
    noOfSeatsToBook:0,
    mealType:'',
    seatNumber:0,
    discountcode:'',
    triptype:'',
    fromPlace:'',
    toPlace:'',
    startdatetime:'',
    airlineName:''
   
  }

  
 
  public FlightNumber :number = 0;
  
  constructor(private builder:FormBuilder, private router:Router,private bservice:BookflightdetailsService, private helperService:HelperService, private aService:AirlinedetailsService) { }
  ngOnInit(): void {
    var data= this.helperService.getOption();
    this.helperService.killData();

 

    console.log(data);
     
     var obj2 = data.find(i=>i.key.toLowerCase() == "flightnumber");
     this.FlightNumber = Number(obj2?.value);
     console.log(this.FlightNumber);
    
     this.aService.getairlinesbyFlightNumber(this.FlightNumber).subscribe(results=> this.bookflightModel = this.aService.getAirlinesFromObservableForBookFlight(results));
     
     console.log(this.bookflightModel);
  
  }
  onSubmit(){
    this.bservice.bookFlight(this.bookflightModel).subscribe(()=> this.onAdded(),(error:any) => this.errorMessage =<any>error);
   



  console.log(this.bookflightModel);
}
onAdded(): void {
console.log("done");
}

public discVal :number = 0;
ApplyDiscount(codeApplied:any):any{
  console.log(codeApplied);
  this.helperService.setOption("DIS0","0");
  this.helperService.setOption("DIS5","5");
  this.helperService.setOption("DIS10","10");
  this.helperService.setOption("DIS20","20");
  this.helperService.setOption("DIS25","25");
  this.helperService.setOption("DIS30","30");

  var discCodes= this.helperService.getOption();
    this.helperService.killData();

 

    var obj1 = discCodes.find(i=>i.key == codeApplied);
    let dicVal = 0;
    this.discVal = Number(obj1?.value);
    let totalPrice = 0;
    let NoOfTickets=0;
    totalPrice = Number(this.bookflightModel.totalPrice?.valueOf());
    NoOfTickets =Number(this.bookflightModel.noOfSeatsToBook?.valueOf());
    console.log(totalPrice);
    console.log(this.bookflightModel.totalPrice);
    console.log(this.discVal);
    console.log(obj1);

 

    totalPrice =NoOfTickets*((totalPrice/100)*(100-this.discVal)) ;
    this.bookflightModel.totalPrice = totalPrice;

 

    console.log(totalPrice);



} 
}
