import { Injectable } from '@angular/core';
import { CanActivate , Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from './global';

@Injectable()
export class LogServices implements CanActivate {

    public url: string;
    public token: string;

    constructor( public _router: Router, private _http: HttpClient ) {

        this.url = Global.url;
        this.getToken();

    }

    canActivate() {
        this.getToken();

        if ( this.log() ) {
           console.log('Login');
           return true;
        } else {
           console.log('Logout');
           this._router.navigate(['/login']);
           return false;
        }
    }

    log() {
        return (this.token != null) ? true : false;
    }

    getToken() {
        if (localStorage.getItem('token')) {
            this.token = localStorage.getItem('token');
        } else {
            this.token = null;
        }
    }

    signupD(user_to_login: any) {
        const json = JSON.stringify(user_to_login);
        const params = json;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

        return this._http.post(this.url + 'Docentes', params, { headers })
        .map( res => {
            this.saveStorageD(res[0].token, res[1]);
            return true;
        });
    }

    signupR(user_to_login: any) {
        const json = JSON.stringify(user_to_login);
        const params = json;

        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'Representantes', params, { headers })
        .map(res => {
            this.saveStorageR(res[0].token, res[1]);
            return true;
        });
    }

    saveStorageD(token: any, datos: any) {
        localStorage.setItem('token', token);
        localStorage.setItem('cod_per', datos.cod_per);
        localStorage.setItem('let_per', datos.let_per);
        localStorage.setItem('cod_profesor', datos.cod_profesor);
        localStorage.setItem('nombre', datos.nombre);
        localStorage.setItem('e_mail', datos.e_mail);
        localStorage.setItem('username', datos.username);
        localStorage.setItem('bandera', datos.bandera);
        localStorage.setItem('cod_emp', '1');
        localStorage.setItem('type', 'D');
        this.getToken();
    }

    saveStorageR(token: any, datos: any) {
        localStorage.setItem('token', token);
        localStorage.setItem('cod_alum', datos.cod_alum);
        localStorage.setItem('cod_per', datos.cod_per);
        localStorage.setItem('let_per', datos.let_per);
        localStorage.setItem('cod_repre', datos.cod_repre);
        localStorage.setItem('nomrepre', datos.nomrepre);
        localStorage.setItem('email', datos.email);
        localStorage.setItem('parentesco_est', datos.parentesco_est);
        localStorage.setItem('telefono', datos.telefono);
        localStorage.setItem('celular', datos.celular);
        localStorage.setItem('hijos', datos.hijos);
        localStorage.setItem('tipo_representante', datos.tipo_representante);
        localStorage.setItem('type', 'R');
        this.getToken();
    }

}
