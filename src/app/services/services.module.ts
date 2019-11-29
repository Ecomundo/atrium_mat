import { NgModule } from '@angular/core';
import {
    LogServices,
    TeacherService/*,
    LeccionarioServices,
    MateriasDocenteService,
    PlanificacionServices,
    SidebarService,
    LoginGuardGuard,
    PagoOnlineService
*/} from './services.index';

@NgModule({
    providers: [
        LogServices,
        TeacherService/*,
        LeccionarioServices,
        MateriasDocenteService,
        PlanificacionServices,
        LoginGuardGuard,
        PagoOnlineService,
        SidebarService,*/
    ]
})
export class ServicesModule { }
