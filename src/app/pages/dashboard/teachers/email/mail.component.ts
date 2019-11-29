import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import { MailService } from './mail.service';
import { AppState } from './app.state';
// import { promise } from 'protractor';

@Component({
  selector: 'app-mail',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']/*,
  providers: [MailService]*/
})
export class MailComponent {
  public id: number;
  public type: string;
  public noRead: any;
  public markAsRead = false;
  public markAsUnRead = false;
  public deleteChecked = false;

  constructor(
    // private service: MailService,
    private route: ActivatedRoute,
    public router: Router,
    private state: AppState
    ) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.id = this.route.snapshot.firstChild.params['id'];
        this.type = this.route.snapshot.firstChild.params['type'];
        setTimeout(() => {
          // jQuery('[data-toggle="tooltip"]').tooltip({ trigger: 'hover' });
        });
      }
    });
  }

  status = false;

  public getBack() {
    if (this.type) {
      this.router.navigate(['apps/email/mail-list/' + this.type]);
    } else {
      this.router.navigate(['apps/email/mail-list/inbox']);
    }
  }

  public setAsRead() {
    this.markAsRead = !this.markAsRead;
    this.state.notifyDataChanged('markAsRead', this.markAsRead);
  }

  public setAsUnRead() {
    this.markAsUnRead = !this.markAsUnRead;
    this.state.notifyDataChanged('markAsUnRead', this.markAsUnRead);
  }

  public deleteCheckedMail() {
    this.deleteChecked = !this.deleteChecked;
    this.state.notifyDataChanged('deleteChecked', this.deleteChecked);
  }

  public openClleft() {
    this.status = !this.status;
  }
}
