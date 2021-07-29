import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Airline } from 'src/app/Model/Airline';
import { searchFlight } from 'src/app/Model/SearchFlight';
import { AirlinedetailsService } from 'src/app/services/airlinedetails.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {
  public searchflightModel:searchFlight = new searchFlight(0,'','');
  submitted:boolean=false;
  eRegisterForm:FormGroup=new FormGroup({});
  
SearchHide: boolean =false;
 
 

  public airlineModel:  Airline[] = [
    

  ];


  public toPlaces=['Delhi','Mumbai'];
  public fromPlaces=['Bangalore','Goa'];

  public places = [ 'Delhi', 'Mumbai','Bangalore','Goa'];
  constructor(private builder:FormBuilder, private router:Router,private airlinedetailservice : AirlinedetailsService,private helperservice:HelperService) { }

 



  ngOnInit(): void {

 
  }



onSubmit(){​​​​​​​
  this.SearchHide=true;
 
 this.airlinedetailservice.searchFlight(this.searchflightModel).subscribe(results=> this.airlineModel = this.airlinedetailservice.getAirlinesFromObservable(results));
 console.log(this.airlineModel);


}​​​​​​​
GotoAddBookings(flightNumber:any){
  console.log("Add Bookings");
   console.log(flightNumber);
 
  this.helperservice.setOption("FlightNumber",flightNumber);
  this.router.navigateByUrl('/bookflight')
}




}
