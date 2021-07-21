import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookFlight } from 'src/app/Model/BookFlight';

@Component({
  selector: 'app-bookflight',
  templateUrl: './bookflight.component.html',
  styleUrls: ['./bookflight.component.css']
})
export class BookflightComponent implements OnInit {

  public mealTypes=['veg','non-veg','none'];

  public toPlaces=['Delhi','Mumbai'];
  public fromPlaces=['Bangalore','Goa'];
  public bookflightModel = new BookFlight();

  onSubmit(){
    console.log(this.bookflightModel);
}
  submitted:boolean=false;
  eRegisterForm:FormGroup=new FormGroup({});
  constructor(private builder:FormBuilder, private router:Router) { }
  ngOnInit(): void {

  //   this.eRegisterForm = this.builder.group({
  //     // name: ['',Validators.required],
  //     // email: ['',Validators.email],
  //     // password: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
      
  //     name:" ",
  //     emailID:['',Validators.email],
  //     noOfSeatsToBook:0,
  //     mealType:" ",
  //     seatNumber:0,
  //     discountcode:" "
  //   })
  // }

  // get eRegisterFormControl(){
  //   return this.eRegisterForm.controls;
  // }
  // bookFlight(){
  //   this.submitted = true;
  //   console.log(this.eRegisterForm);
  //   if(this.eRegisterForm.valid){
  //     console.log('Form Submitted without errors...');
  //   }
  }

}
