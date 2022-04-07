import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    FooterComponent,
    TopNavBarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    FooterComponent,
    TopNavBarComponent
  ]
})
export class NavbarsModule { }
