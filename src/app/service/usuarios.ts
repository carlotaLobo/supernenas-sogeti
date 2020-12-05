import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { UserModel } from '../models/userModel';

@Injectable()
export class UsuarioService {
  private urlUsers: string;

  constructor(private _http: HttpClient) {
    this.urlUsers = Global.URLusers;
  }
  getLogin(user: UserModel): Observable<any> {
  let headers = {
      headers: new HttpHeaders({
        'content-type': 'charset=utf-8',
        'password': user.password,
        'user': user.user,
      }),
    };
    return this._http.post(Global.URLAuthentication,{headers: headers})

  }
  getUsuarios(): Observable<any> {
    return this._http.get(this.urlUsers);
  }

}
