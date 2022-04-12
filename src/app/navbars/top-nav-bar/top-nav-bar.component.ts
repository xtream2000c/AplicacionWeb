import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {
  navItem1:string;
  navItem2:string;
  navItem1Icon:string;
  navItem2Icon:string;
  navItem1Text:string;
  navItem2Text:string;
  constructor() { }

  ngOnInit(): void {
    this.checkLoged();
  }

  clear(){
    if (sessionStorage.getItem('user')!= null) {
      sessionStorage.removeItem('user');
    }
  }

  checkLoged(){

    if(sessionStorage.getItem('user')!= null){
      
      this.navItem1='profile';
      this.navItem1Icon = 'person';
      this.navItem1Text = 'Perfil';

      this.navItem2='login';
      this.navItem2Icon = 'logout';
      this.navItem2Text = 'Cerrar sesion';

    }
    else{
     
      this.navItem1='register';
      this.navItem1Icon = 'person_add';
      this.navItem1Text = 'Registro';

      this.navItem2='login';
      this.navItem2Icon = 'person';
      this.navItem2Text = 'Iniciar sesion';

    }
  }

}
