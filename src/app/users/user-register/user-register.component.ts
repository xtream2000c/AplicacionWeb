import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/components/models/users';
import { userService } from '../../components/services/userService/user-form-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
  host:{
    class:'container mt-5'
  }
})
export class UserRegisterComponent implements OnInit {

   user = new User;
   name : string;
   email : string;
   username : string;
   password : string;

  constructor(private userService: userService) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.user.name = this.name;
    this.user.email = this.email;
    this.user.username = this.username;
    this.user.password = this.password;

    this.userService.guardarUser(this.user).subscribe(data => {
      alert('Guardado exitosamente');
    })
  }

}
