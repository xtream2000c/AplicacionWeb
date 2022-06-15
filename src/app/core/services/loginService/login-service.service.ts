import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  navItem1:string;
  navItem2:string;
  navItem1Icon:string;
  navItem2Icon:string;
  navItem1Text:string;
  navItem2Text:string;
  
  constructor() { }

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
