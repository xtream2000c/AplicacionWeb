import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
  host:{
    class:'container mt-5'
  }
})
export class UserRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
