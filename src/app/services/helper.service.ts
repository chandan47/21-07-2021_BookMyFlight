import { Injectable } from '@angular/core';
import { Helper } from '../Model/Helper';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }
  public data :Helper[] = [];
 
  setOption(option : string, value : any) {
    var data1 = new Helper(option,value);   
   this.data.push(data1);
   }
  
   getOption() {
     return this.data;
   }
  
   killData(){
     this.data = [];
   }
}
