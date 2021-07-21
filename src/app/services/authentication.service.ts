import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignIn } from '../Model/signin';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly mockedUser : SignIn[]=[new SignIn('chandan@gmail.com','1234'),new SignIn('admin@gmail.com','9876')];
 
  isAuthenticated = false;
  isUser = false;


  constructor(private router:Router) { }
  authenticate(signIn: SignIn):boolean{
      if(this.checkCredentials(signIn)){
        this.isAuthenticated= true;
        this.checkRole(signIn.getEmail());
        if(this.isUser == true){
          this.router.navigate(['bookflight']);
        }else{
          this.router.navigate(['addairline']);
        }
        
        return true;
      }
      this.isAuthenticated= false;
      return false;
  }
  private checkCredentials(signin: SignIn) :boolean {
     return this.checkEmail(signin.getEmail()) &&  this.checkPassword(signin.getPassword());
  }

  private checkEmail(email:string):boolean{
  
     var obj = this.mockedUser.filter(i=>i.getEmail() == email);
     if(obj != null)
         return true;
    else
    return false;
  }
  private checkPassword(password:string):boolean{
      
      var obj = this.mockedUser.filter(i=>i.getPassword() == password);
    if(obj != null)
        return true;
   else
   return false;
  }
  private checkRole(email:string){
    console.log("role checking");
    if(email == "chandan@gmail.com")
    {
      this.isUser = true;
      console.log("role is user");
    }

    else
    {
      this.isUser = false;
      console.log("role is admin");
    }


}

  logout(){
    this.isAuthenticated = false;
    this.router.navigate(['']); 
  }
  
}
