import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegisterComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule
  ]
})
export class UsersModule { }
