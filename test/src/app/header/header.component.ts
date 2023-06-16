import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  nameList=["a","b","c","e"];
    name="Divay Bharti";

    isLogin=true;

  // var a:string;
  buttonForm(){
    // alert(this.name)
    console.log(this.name);
  }   

  hide=true;
  showHide(){
    this.hide=!this.hide;
  }
  

  

}


