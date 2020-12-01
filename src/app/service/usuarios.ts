import {​​​​ Injectable }​​​​ from '@angular/core';
import {​​​​ HttpClient }​​​​ from '@angular/common/http';
import {​​​​ Observable }​​​​ from 'rxjs';
import {​​​​ Global }​​​​ from './global';
 
@Injectable()
export class UsuarioService {
    ​​​​
  private urlUsers: string;

  constructor(private _http: HttpClient) {​​​​
    this.urlUsers = Global.URLusers;
   
  }​​​​
 
  getUsuarios(): Observable<any> {​​​​

    return this._http.get(this.urlUsers);
  }​​​​
​​​​
}​​​​