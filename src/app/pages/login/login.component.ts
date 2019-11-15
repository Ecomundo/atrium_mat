import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LogServices } from '../../services/services.index';
import { Log } from '../../models/log.models';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public typelog: any[];
  public log: string;
  public title = 'app';
  public user: Log;
  public datos: any;
  public token: any;
  public erroMessage: any;
  forma: FormGroup;

  constructor(private _log: LogServices, private _router: Router) {

    this.typelog = [
      {title: 'Docente', value: 'd'},
      {title: 'Representante', value: 'r'}
    ];
    this.user = new Log('', '');

  }

  ngOnInit() {

    this.forma = new FormGroup({
      user: new FormControl(null, [Validators.required, Validators.email]),
      pass: new FormControl(null, Validators.required),
      typelog: new FormControl(false)
    });

  }

  onLoggedin() {

    if (this.log === 'd') {

      this._log.signupD(this.user).subscribe(
        ok => {
          this.user = new Log('', '');
          this._router.navigate(['/dashboard/dashboard1']);
        },
        error => {
          const mensaje = error.json();
          console.error('error');
          // Swal.fire('Oops parece que esta ingresando mal tus datos :S !', mensaje.message, 'error');
        }
      );

    } else if (this.log === 'r') {

      this._log.signupR(this.user).subscribe(
        ok => {
          this.user = new Log('', '');
          this._router.navigate(['/pago_online']);
        },
        error => {
          const mensaje = error.json();
          console.error('error');
          // Swal.fire('Oops parece que esta ingresando mal tus datos :S !', mensaje.message, 'error');
        }
      );

    }

  }

}
