import { NgModule } from '@angular/core';
import {
    LogServices/*,
    LeccionarioServices,
    MateriasDocenteService,
    PlanificacionServices,
    SidebarService,
    LoginGuardGuard,
    PagoOnlineService
*/} from './services.index';

@NgModule({
    providers: [
        LogServices/*,
        LeccionarioServices,
        MateriasDocenteService,
        PlanificacionServices,
        LoginGuardGuard,
        PagoOnlineService,
        SidebarService,*/
    ]
})
export class ServicesModule { }
