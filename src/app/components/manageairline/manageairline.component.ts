import { Component, OnInit } from '@angular/core';
import { Airline } from 'src/app/Model/Airline';
import { AirlinedetailsService } from 'src/app/services/airlinedetails.service';

@Component({
  selector: 'app-manageairline',
  templateUrl: './manageairline.component.html',
  styleUrls: ['./manageairline.component.css']
})
export class ManageairlineComponent implements OnInit {
  errorMessage: any;

  constructor(private aService:AirlinedetailsService) { }

  airline:Airline[] = [];
  ngOnInit(): void {
    this.aService.getAirlines().subscribe(results=> this.airline = this.aService.getAirlinesFromObservable(results));
  }
 

  BlockAirline(obj :any){
    console.log("Request raised to block airline");
    this.aService.BlockOrUnblockAirline(obj,true).subscribe(()=> this.onUpdate("Blocked"),(error:any) => this.errorMessage =<any>error);
    console.log(obj);
  }
  onUpdate(msg:any): void {
    console.log("AirLine is "+msg);
  }
  UnBlockAirLine(obj:any){
    console.log("Request raised to unblock airline");
    console.log("Request raised to block airline");
    this.aService.BlockOrUnblockAirline(obj,false).subscribe(()=> this.onUpdate("Unblocked"),(error:any) => this.errorMessage =<any>error);
    console.log(obj);
  }

}
