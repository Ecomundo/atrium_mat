import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TeacherService } from '../../../../../services/services.index';

@Component({
  selector: 'app-mail-compose',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mail-compose.component.html',
  styleUrls: ['./mail-compose.component.scss']
})
export class MailComposeComponent implements OnInit {
  public config_mail: PerfectScrollbarConfigInterface = {};
  public curso: string;
  public desti: string;

  constructor() {}

  ngOnInit() {
    this.curso = 'Cursos';
    this.desti = 'Destinatarios';
  }
}


