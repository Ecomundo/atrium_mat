import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Global } from '../../../../services/global';
import { Observable } from 'rxjs/Observable';
import { MailInbox, MailSent } from './mail.model';
import { Jsonp } from '@angular/http';

@Injectable()
export class MailService {

  public MailsIn: MailInbox[] = [];
  public MailsSe: MailSent[] = [];
  public noRead: number;

  private url: string;
  private token: string = localStorage.getItem('token');

  constructor(private _http: HttpClient, private _router: Router) {
    this.url = Global.url;
  }


  public getMail(id: number | string, type: number | string) {
    if ( type === 'inbox' ) {
      console.log(this.MailsIn[id]);
      return this.MailsIn[id];
    } else if (type === 'sent') {
      console.log(this.MailsSe[id]);
      return this.MailsSe[id];
    }
  }

  public getAllInbox() {
    const data = {
      para_mens: localStorage.getItem('cod_user'),
      cod_mens_clas_para: localStorage.getItem('cod_mens_clas_para'),
      estado: 'A',
    };
    const params = JSON.stringify(data);
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token});
    return this._http.post(this.url + 'mensInbox', params, { headers });
  }

  public getAllSent() {
    const data = {
      de_mens: localStorage.getItem('cod_user'),
      cod_mens_clas_de: localStorage.getItem('cod_mens_clas_para'),
      estado: 'A',
    };
    const params = JSON.stringify(data);
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token});
    return this._http.post(this.url + 'mensSent', params, { headers });
  }

  public getInfoMensa() {
    const data = {
      para_mens: localStorage.getItem('cod_user'),
      cod_mens_clas_para: localStorage.getItem('cod_mens_clas_para'),
      estado: 'A',
    };
    const params = JSON.stringify(data);
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token});
    this._http.post(this.url + 'infoMensa', params, { headers });
  }

  public getOpenMensa() {
    const data = {
      cod_mens: localStorage.getItem('cod_mens')
    };
    const params = JSON.stringify(data);
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token});
    return this._http.post(this.url + 'openMensa', params, { headers });
  }

  public getStudents(cod_curso: number, des_paralelo: string) {
    const data = {
      cod_per: localStorage.getItem('cod_per'),
      let_per: localStorage.getItem('let_per'),
      cod_curso: cod_curso,
      des_paralelo: des_paralelo
    };
    const params = JSON.stringify(data);
    const headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token});
    return this._http.post(this.url + 'getStudents', params, { headers });
  }

}
