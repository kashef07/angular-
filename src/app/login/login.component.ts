import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!:string;
  password!:string;
  

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }


logInUser(){
  if(this.email=="aa@a" && this.password=="123"){
    this._router.navigate(['sidebar'])
  }

else{
  alert("Enter valid username and Password")
}
}
}
 
