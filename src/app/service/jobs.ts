import { Injectable } from "@angular/core";
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Global } from './global';


@Injectable()
export class JobsService {


    constructor(private _http: HttpClient) {        
    }

    public getJobs():Observable<any>{

        let headers = new HttpHeaders().set(
            'access-token',
            localStorage.getItem('token')
          );
        return this._http.get(Global.URLJobs, {headers: headers});
    }


}