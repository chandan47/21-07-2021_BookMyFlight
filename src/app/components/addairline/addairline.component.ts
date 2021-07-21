import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Airline } from 'src/app/Model/Airline';
import { AirlinedetailsService } from 'src/app/services/airlinedetails.service';

@Component({
  selector: 'app-addairline',
  templateUrl: './addairline.component.html',
  styleUrls: ['./addairline.component.css']
})
export class AddairlineComponent implements OnInit {
submitted:boolean=false;
  eRegisterForm:FormGroup=new FormGroup({});

  public meals = ['non-veg', 'veg','none'];
  public scheduleddayss= ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
  public instrumentUseds=['normal','scientific'];
  
  public toPlaces=['Delhi','Mumbai'];
  public fromPlaces=['Bangalore','Goa'];
  // public airlineModel = new Airline();
  errorMessage: any;
  airlineModel : Airline={
    airlineName:"",
    uploadLogo:"",
    flightNumber:0,
    fromPlace:"",
    toPlace:"",
    startdatetime:"",
    enddatetime:"",
    scheduleddays:"",
    instrumentUsed:"",
    tNoBusinessClassSeats:0,
    tNoNonBusinessClassSeats:0,
    ticketCost: 0,
    numberofRows:0,
    meal:"",
    isBlocked:false,
    status:0
  }

  // onSubmit(){
  //     console.log(this.airlineModel);
  // }

  constructor(private builder : FormBuilder, private router:Router,private aService:AirlinedetailsService) { }
  

  ngOnInit(): void {

  //   this.eRegisterForm = this.builder.group({
  //     // name: ['',Validators.required],
  //     // email: ['',Validators.email],
  //     // password: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
  //     airlineName:['',Validators.required],
  //     uploadLogo:" ",
  //     flightNumber:0,
  //     fromPlace:" ",
  //     toPlace:" ",
  //     startdatetime:"10-10-2021",
  //     enddatetime:"15-10-2021",
  //     scheduleddays:" ",
  //     instrumentUsed:" ",
  //     tNoBusinessClassSeats:0,
  //     tNoNonBusinessClassSeats:0,
  //     ticketCost: 0,
  //     numberofRows:0,
  //     meal:" "

  //   })
  // }

  // get eRegisterFormControl(){
  //   return this.eRegisterForm.controls;
  // }
  // registerAirline(){
  //   this.submitted = true;
  //   console.log(this.eRegisterForm);
  //   if(this.eRegisterForm.valid){
  //     console.log('Form Submitted without errors...');
  //   }

  }
  onSubmit(){
    this.aService.addAirLine(this.airlineModel).subscribe(()=> this.onAdded(),(error:any) => this.errorMessage =<any>error);
    // this.airineDetailsService.getairlines().subscribe(results=> this.airlineDetails = this.airineDetailsService.getAirlinesFromObservable(results));



  console.log(this.airlineModel);
}
onAdded(): void {
console.log("done");
}
   
}
