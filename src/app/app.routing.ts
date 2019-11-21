import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';

const Approutes: Routes = [
  { path: 'login', component: LoginComponent }
];

export const APP_ROUTES = RouterModule.forRoot(Approutes, { useHash: true });
