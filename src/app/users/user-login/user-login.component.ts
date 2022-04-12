import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/users';
import { userService } from 'src/app/core/services/userService/user-form-service.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  host:{
    class:'container mt-5'
  }
})
export class UserLoginComponent implements OnInit {
  username:string;
  password:string;
  user = new User;
  
  constructor(private userService : userService) { }

  ngOnInit(): void {
    
  }

  loginUser(){

    this.user.username=this.username;
    this.user.password=this.password;

    this.userService.login(this.user).subscribe(data => {
      sessionStorage.setItem('user', JSON.stringify(data))
      console.log(data);
      location.href='profile';
    },
    error=>{
      alert('Usuario no encontrado');
    })

  }

}
