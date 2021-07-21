import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Airline } from 'src/app/Model/Airline';
import { searchFlight } from 'src/app/Model/SearchFlight';

@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {
  public searchflightModel:searchFlight = new searchFlight(0,'','');
  submitted:boolean=false;
  eRegisterForm:FormGroup=new FormGroup({});
  // public instrumentUseds=['normal','scientific'];

 
 

  public airlineModel:  Airline[] = [
    new Airline('IndigoAir','https://static.goindigo.in/content/dam/indigov2/6e-website/downloadapp/Feature-Image.png',1234,'abc','Bangalore','Delhi','13-07-2021 23:48','31-07-2021 05:48','monday','normal',20,50,1000,10,'none'),
    new Airline('Emirites','https://flightstatus24.com//wp-content/uploads/2018/07/649e1c738c189557e58cf78e1ec21cfe.jpg',2345,'aaa','Goa','Mumbai','13-07-2021 23:48','31-07-2021 05:48','monday','normal',20,50,1000,10,'none'),
    new Airline('Kingfisher','https://i.pinimg.com/originals/45/88/c1/4588c16bede19dc0d53df8f32c131495.jpg',3456,'por','Bangalore','Mumbai','13-07-2021 23:48','31-07-2021 05:48','monday','normal',20,50,1000,10,'none'),
    new Airline('Qatar','https://1000logos.net/wp-content/uploads/2020/09/Air-India-logo.jpg',4567,'verde','Goa','Delhi','13-07-2021 23:48','31-07-2021 05:48','monday','normal',20,50,1000,10,'none')

  ];

  public toPlaces=['Delhi','Mumbai'];
  public fromPlaces=['Bangalore','Goa'];

  public places = [ 'Delhi', 'Mumbai','Bangalore','Goa'];
  constructor(private builder:FormBuilder, private router:Router) { }

 



  ngOnInit(): void {

 
  }
  onSubmit(){
    var displaysearchplaces:Airline[] = (this.airlineModel.filter(search=>search.fromPlace == this.searchflightModel.fromPlace && 
      search.toPlace == this.searchflightModel.toPlace)  );
      console.log(displaysearchplaces);

      var displaysearchFlightNumber:Airline[] = (this.airlineModel.filter(search=>search.flightNumber == this.searchflightModel.flightNumber));
        console.log(displaysearchFlightNumber);
      console.log("Searched");
  
}

}
