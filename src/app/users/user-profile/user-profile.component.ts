import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  host:{
    class:'container mt-5'
  }
})
export class UserProfileComponent implements OnInit {
  
  userData:string;
  name : string;
  email : string;
  username : string;
  password : string;


  constructor() { }

  ngOnInit(): void {
    this.userData = JSON.parse(sessionStorage.getItem('user'));
    
    this.name=this.userData['name'];
    this.email=this.userData['email'];
    this.username=this.userData['username'];
    this.password=this.userData['password'];
    
  }



}
