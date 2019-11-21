import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ObservationsComponent } from './teachers/observations/observations.component';
import { PAGES_ROUTES } from './dashboard.routing';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { FullComponent } from '../layouts/full/full.component';
import { NavigationComponent } from './shared/header-navigation/navigation.component';

import { SpinnerComponent } from './shared/spinner.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { ProjectCounterComponent } from '../../dashboards/dashboard-components/project-counter/project-counter.component';
import { MailModule } from './teachers/email/mail.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelSpeed: 2,
    wheelPropagation: true
  };

@NgModule({
    declarations: [
        FullComponent,
        NavigationComponent,
        SpinnerComponent,
        SidebarComponent,
        BreadcrumbComponent,
        ObservationsComponent,
        ProjectCounterComponent
    ],
    imports: [
        BrowserModule,
        PAGES_ROUTES,
        NgbModule.forRoot(),
        PerfectScrollbarModule,
        FormsModule,
        ReactiveFormsModule,
        MailModule
    ],
    exports: [
        FullComponent,
        NavigationComponent,
        SpinnerComponent,
        SidebarComponent,
        BreadcrumbComponent,
        ObservationsComponent,
        ProjectCounterComponent
    ],
    providers: [
        {
          provide: PERFECT_SCROLLBAR_CONFIG,
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
      ],
})
export class DashboardModule { }
