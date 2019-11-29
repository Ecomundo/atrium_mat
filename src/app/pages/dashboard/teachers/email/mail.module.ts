import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PipesModule } from './pipes/pipes.module';
import { AppState } from './app.state';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MailComponent } from './mail.component';
import { MailComposeComponent } from './mail-compose/mail-compose.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { MailDetailComponent } from './mail-detail/mail-detail.component';
import { MailService } from './mail.service';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true
};


export const routes = [
  {
    path: '',
    component: MailComponent,
    children: [
      { path: '', redirectTo: 'mail-list/inbox', pathMatch: 'full' },
      { path: 'mail-list/:type', component: MailListComponent },
      { path: 'mail-compose', component: MailComposeComponent },
      { path: 'mail-list/:type/:id', component: MailDetailComponent }
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    NgbModule.forRoot(),
    RouterModule.forChild(routes),
    PerfectScrollbarModule
  ],
  declarations: [
    MailComponent,
    MailComposeComponent,
    MailListComponent,
    MailDetailComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    MailService,
    AppState
  ]
})
export class MailModule { }
