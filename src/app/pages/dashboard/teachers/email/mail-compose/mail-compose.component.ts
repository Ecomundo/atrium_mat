import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TeacherService } from '../../../../../services/services.index';
import { CursoDocente, GetStudens } from '../../../../../models/teachers/teacher.model';
import { MailService } from '../mail.service';

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
  public cursos: CursoDocente[] = [];
  public destis: any;
  public ocu = false;
  public isAllSelected = false;
  public studens: GetStudens[] = [];
  public tem: any[] = [];
  public studGroup: Array<any> = new Array;

  constructor(public teachser: TeacherService, public service: MailService) {}

  ngOnInit() {
    console.log(typeof this.studGroup);
    this.curso = 'Cursos';
    this.desti = 'Destinatarios';
    this.teachser.getCourses().map((resp) => resp as CursoDocente[]).toPromise().then(x => { this.cursos = x ; });
    this.destis = [{dest: 'Alumnos', value: '1'}, {dest: 'Representantes', value: '2'}, { dest: 'Alumnos y Representantes', value: '4'}];
  }

  public getPupil(id: number) {
    this.service.getStudents(this.cursos[id].cod_curso, this.cursos[id].Dp).toPromise()
    .then(x => {
      this.studens = x as GetStudens[];
      this.studGroup = [];
      console.log(this.studens);
      for ( let i = 0; i <= this.studens.length - 1; i++ ) {
        this.tem.push(this.studens[i]);
        if (
          (this.studens.indexOf(this.studens[i]) === this.studens.length - 1 ||
          (this.studens.indexOf(this.studens[i]) + 1) % 3 === 0) ) {
            this.studGroup.push(this.tem);
            this.tem = [];
          }
      }
      console.log(typeof this.studGroup);
    });
    this.curso = `${this.cursos[id].Dm} ${this.cursos[id].Dca} ${this.cursos[id].Dp}`;
    this.ocu = true;
  }

  public changeAdress(adress: any) {
    this.desti = `${this.destis[adress].dest}`;
  }

  public toggleAll() {
    this.isAllSelected = !this.isAllSelected;
    this.studGroup.map(result => {
      result.map(student => {
           student.selected = this.isAllSelected;
        });
      });
  }

}
