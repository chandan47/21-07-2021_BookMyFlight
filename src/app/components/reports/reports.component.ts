import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Airline } from 'src/app/Model/Airline';
import { AirlinedetailsService } from 'src/app/services/airlinedetails.service';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  @ViewChild('content',{static: false}) el!:ElementRef;

  constructor(private aService:AirlinedetailsService) { }
  airline:Airline[] = [];
  ngOnInit(): void {
    this.aService.getAirlines().subscribe(results=> this.airline = this.aService.getAirlinesFromObservable(results));
  }
  download(){
    console.log("Downloaded");
    var pdf =new jspdf.jsPDF('l','pt','a3');
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save("reports.pdf")
      }
    });
    
  }

}
