import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { AuthModel } from '../models/authModel';

@Injectable()
export class UsuarioService {
  private URLUsers: string;

  constructor(private _http: HttpClient) {
    this.URLUsers = Global.URLUsers;
  }
  getLogin(user: AuthModel): Observable<any> {
    let header = new HttpHeaders()
      .set('password', user.password)
      .set('user', user.user);

    return this._http.post(Global.URLAuthentication, '', { headers: header });
  }
  getUsuarios(): Observable<any> {
    let headers = new HttpHeaders().set(
      'access-token',
      localStorage.getItem('token')
    );
    return this._http.get(this.URLUsers, { headers: headers });
  }
}
