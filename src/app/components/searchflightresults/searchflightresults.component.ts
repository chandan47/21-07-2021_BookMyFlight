import { Component, OnInit } from '@angular/core';
import { Airline } from 'src/app/Model/Airline';
import { searchFlight } from 'src/app/Model/SearchFlight';
import { AirlinedetailsService } from 'src/app/services/airlinedetails.service';

@Component({
  selector: 'app-searchflightresults',
  templateUrl: './searchflightresults.component.html',
  styleUrls: ['./searchflightresults.component.css']
})
export class SearchflightresultsComponent implements OnInit {
  public searchflightModel:searchFlight = new searchFlight(0,'','');
  public airline:  Airline[] = [];
  constructor(private airlinedetailservice : AirlinedetailsService) { }

  ngOnInit(): void {
  }
  GotoAddBookings(){
    console.log("Add Bookings");
  }
  
}
