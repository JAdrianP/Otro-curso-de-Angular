import { Injectable } from '@angular/core';
import { IApiUserAuthenticated } from '../../interfaces';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs'

import { Router } from '@angular/router';
import { ERRORS_CONST } from '../../constants/errors';
import { API_ROUTES, INTERNAL_ROUTES } from '../../constants/routes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: BehaviorSubject<IApiUserAuthenticated>;
  public nameUserLS = 'currentUserAD';

  constructor(private http: HttpClient, private router: Router) {
    //este paso intermedio se hace porque localstorage.getItem puede devolver null y a esto no le mola nada
    const userFromLocalStorage = localStorage.getItem(this.nameUserLS);
  
    console.log(userFromLocalStorage);

    if(userFromLocalStorage !== null && userFromLocalStorage !== 'undefined' )
    {
      console.log('hola');
      
      this.currentUser = new BehaviorSubject(JSON.parse(userFromLocalStorage));
    }
    else{
      console.log('adios');
      
      this.currentUser = new BehaviorSubject({
        "fullname": "",
        "age": 0,
        "token": "",
        "avatar": ""
      });
    }


   /* this.currentUser = new BehaviorSubject(
      userFromLocalStorage ? JSON.parse(userFromLocalStorage) : null 
    );*/
     
      

  }

  get getUser(): IApiUserAuthenticated {

    return this.currentUser.value;
  }

  login(
    data: {
      email: string;
      password: string;
    }
  ): Observable<{
    error: boolean;
    msg: string;
    data: any;
  }> {
    const response = { error: true, msg: ERRORS_CONST.LOGIN.ERROR, data: null };
    return this.http.post<{ error: boolean, msg: string, data: any }>('http://213.32.91.54/auth/login', data)
      .pipe(map(r => {
        response.msg = r.msg;
        response.error = r.error;
        response.data = r.data;
        this.setUserToLocalStorage(r.data);
        this.currentUser.next(r.data);
        console.log('LA RESPUESTA DEL SERVIDOR ES: ',r);
        console.log('EL ERROR ES: ', response.error);
        

        if (response.error === false) {
          console.log('hey');
          
          
          this.router.navigateByUrl(INTERNAL_ROUTES.PANEL_USER_LIST);
        }
        return response;
      }),
        catchError(e => { 
          console.log('dentro de error');
          return of(response); 
        }));
  }

  logout() {
    localStorage.removeItem(this.nameUserLS);

    this.currentUser.next({
      fullname: '',
      age: 0,
      token: '',
      avatar: ''
    });

    this.router.navigateByUrl(INTERNAL_ROUTES.AUTH_LOGIN);
  }

  private setUserToLocalStorage(user: IApiUserAuthenticated) {
    localStorage.setItem(this.nameUserLS, JSON.stringify(user))


  }
}
