import { Routes, RouterModule } from '@angular/router';
import { LogServices } from '../../services/services.index';

import { ObservationsComponent } from './teachers/observations/observations.component';
import { FullComponent } from '../layouts/full/full.component';
import { MailComponent } from './teachers/email/mail.component';
import { MailListComponent } from './teachers/email/mail-list/mail-list.component';
import { MailComposeComponent } from './teachers/email/mail-compose/mail-compose.component';
import { MailDetailComponent } from './teachers/email/mail-detail/mail-detail.component';



const Dashroutes: Routes = [
    {
        path: '',
        component: FullComponent,
        canActivate: [LogServices],
        children: [
            {
                path: 'observaciones',
                component: ObservationsComponent
            },
            {
                path: 'email',
                component: MailComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'mail-list/inbox',
                        pathMatch: 'full'
                    },
                    {
                        path: 'mail-list/:type',
                        component: MailListComponent
                    },
                    {
                        path: 'mail-compose',
                        component: MailComposeComponent
                    },
                    {
                        path: 'mail-list/:type/:id',
                        component: MailDetailComponent
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/observaciones',
                pathMatch: 'full' }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(Dashroutes);
