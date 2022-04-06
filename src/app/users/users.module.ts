import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';



@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegisterComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
