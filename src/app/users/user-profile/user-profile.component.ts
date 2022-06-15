import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EUserType } from 'src/app/core/models/EUserType';

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
  type: EUserType;
  admin:boolean = false;


  constructor(private router:Router) { }

  ngOnInit(): void {
    this.userData = JSON.parse(sessionStorage.getItem('user'));
    
    this.name=this.userData['name'];
    this.email=this.userData['email'];
    this.username=this.userData['username'];
    this.password=this.userData['password'];
    this.type = this.userData['type'];
    
    this.admin = this.type == EUserType.admin ? false : true;

  }

  addProduct(){
    this.router.navigate(['createProduct']);
  }

  productList(){
    this.router.navigate(['adminList']);
  }



}
