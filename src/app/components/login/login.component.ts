import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignIn } from 'src/app/Model/signin';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }
  onSubmit(signInForm: NgForm){
    console.log(signInForm.value);
    const signIn= new SignIn(signInForm.value.email , signInForm.value.password);
    this.authenticationService.authenticate(signIn);
  }
}
