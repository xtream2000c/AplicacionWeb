import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../models/users';

@Injectable({
  providedIn: 'root'
})
export class userService {

  myAppUrl = 'http://localhost/';
  myApiUrl = 'ProyectoFinal/ProyectoFinal-Back/';
  lista: User[] = [];
  private actualizarFormulario = new BehaviorSubject<User>({} as any);

  constructor( private http:HttpClient ) { }

guardarUser(User: User): Observable<User> {
  return this.http.post<User>(this.myAppUrl+this.myApiUrl, User)
}

eliminarUser(id:number): Observable<User> {
  return this.http.delete<User>(this.myAppUrl + this.myApiUrl+ '/' + id);
}

async obtenerUsers() : Promise<User[]>{

  let Users = await this.http.get<User[]>(this.myAppUrl+this.myApiUrl).toPromise()
  
  return Users;

}

  actualizarUser(id: number, User:User ) : Observable<User>{
    return this.http.put<User>(this.myAppUrl + this.myApiUrl + '/' +id, User);
  }

  actualizar(User){
    this.actualizarFormulario.next(User);
  }

  obtenerUser(): Observable<User>{
    return this.actualizarFormulario.asObservable();
  }

}