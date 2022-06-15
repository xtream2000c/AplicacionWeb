import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/users';
import { LoginServiceService } from 'src/app/core/services/loginService/login-service.service';
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
  
  constructor(private userService : userService, private router: Router, private loginService:LoginServiceService) { }

  ngOnInit(): void {
    
  }

  loginUser(){
    
    this.user.username=this.username;
    this.user.password=this.password;

    this.userService.login(this.user).subscribe(data => {
      sessionStorage.setItem('user', JSON.stringify(data))
      console.log(data);
      this.loginService.checkLoged();
      this.router.navigate(['profile']);
    },
    error=>{
      console.log(error);
      switch(error){
        case 400:
          alert('No se ha introducido usuario o contraseña');
        break;
        case 404:
          alert('Usuario no encontrado');
        break;
      }
    })
  }
}
