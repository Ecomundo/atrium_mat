import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { MailService } from '../mail.service';
import { AppState } from '../app.state';
import { MailInbox, MailSent } from '../mail.model';


@Component({
  selector: 'app-inbox-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mail-list.component.html'
})
export class MailListComponent implements OnInit {
  public mails: Observable<MailSent[]>;
  public in = false;
  public se = false;
  public mailsIn: MailInbox[];
  public mailsSe: MailSent[];
  public type: string;
  public isAllSelected: boolean;
  public searchText: string;
  public pageIn = 1;
  public pageSe = 1;
  public pageSize = 9;
  public collectionSizeIn = 0;
  public collectionSizeSe = 0;

  constructor(private service: MailService, private route: ActivatedRoute, public router: Router, private state: AppState) {
    /*this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.unSelectAll();
        this.searchText = '';
      }
    });

    this.state.subscribe('markAsRead', val => {
      this.markAllAsRead();
    });

    this.state.subscribe('markAsUnRead', val => {
      this.markAllAsUnRead();
    });

    this.state.subscribe('deleteChecked', val => {
      this.deleteAllCheckedMail();
    });*/
  }

  ngOnInit() {
    // this.service.getInfoMen();
    this.service.getAllInbox().map((resp) => resp as MailInbox[]).toPromise()
    .then(x => { this.mailsIn = x; this.collectionSizeIn = this.mailsIn.length; });
    this.service.getAllSent().map((resp) => resp as MailSent[]).toPromise()
    .then(x => { this.mailsSe = x; this.collectionSizeSe = this.mailsSe.length; });
    this.getMails();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.getMails();
      }
    });

  }

  public getMails() {
    this.type = this.route.snapshot.params['type'];
    switch (this.type) {
      case 'inbox':
        this.in = true;
        this.se = false;
        break;
      case 'sent':
        this.se = true;
        this.in = false;
        break;
      default:
        this.in = true;
        this.se = false;
        break;
    }
  }

  public goToDetail(cod_mens: string) {
    localStorage.removeItem('cod_mens');
    localStorage.setItem('cod_mens', cod_mens);
    this.router.navigate(['email/mail-list/', this.type, cod_mens]);
  }

  public changeStarStatus(mail: any) {
    mail.starred = !mail.starred;
  }

  /*public toggleAll() {
    const toggleStatus = !this.isAllSelected;
    this.mails.subscribe(result => {
      result.forEach(mail => {
        mail.selected = toggleStatus;
      });
    });
  }

  public toggleOne() {
    this.mails.subscribe(result => {
      this.isAllSelected = result.every(mail => {
        return mail.selected === true;
      });
    });
  }

  public unSelectAll() {
    this.isAllSelected = false;
    if (this.mails) {
      this.mails.subscribe(result => {
        result.forEach(mail => {
          mail.selected = false;
        });
      });
    }
  }

  public markAllAsRead() {
    this.mails.subscribe(result => {
      result.forEach(mail => {
        // tslint:disable-next-line:curly
        if (mail.selected) mail.unread = false;
      });
    });
  }

  public markAllAsUnRead() {
    this.mails.subscribe(result => {
      result.forEach(mail => {
        // tslint:disable-next-line:curly
        if (mail.selected) mail.unread = true;
      });
    });
  }

  public deleteAllCheckedMail() {
    this.mails.subscribe(result => {
      result.forEach(mail => {
        if (mail.selected) {
          mail.trash = true;
          mail.sent = false;
          mail.draft = false;
          mail.starred = false;
        }
      });
    });
    this.getMails();
    this.isAllSelected = false;
  }*/

}
