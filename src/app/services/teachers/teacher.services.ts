import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Global } from '../global';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TeacherService {

  private url: string;
  private token: string = localStorage.getItem('token');

  constructor(private _http: HttpClient, private _router: Router) {
    this.url = Global.url;
  }

  public getCourses() {
    const data = {
        cod_profesor: localStorage.getItem('cod_user'),
        cod_per: localStorage.getItem('cod_per'),
        let_per: localStorage.getItem('let_per'),
        bandera: localStorage.getItem('bandera')
    };
    const params = JSON.stringify(data);
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token});
    return this._http.post(this.url + 'Docentesmaterias', params, { headers });
  }

}
