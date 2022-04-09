import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  host:{
    class:'container mt-5'
  }
})
export class UserLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
