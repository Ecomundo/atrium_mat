import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { MailInbox, MailService } from '../mail.service';
import { AppState } from '../app.state';

@Component({
  selector: 'app-inbox-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mail-list.component.html'
})
export class MailListComponent implements OnInit {
  public in = true;
  public se = false;
  public mails: Observable<any>;
  public type: string;
  public isAllSelected: boolean;
  public searchText: string;

  constructor(private service: MailService, private route: ActivatedRoute, public router: Router, private state: AppState) {
    this.router.events.subscribe(event => {
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
    });
  }

  ngOnInit() {
    this.getMails();
  }

  public getMails() {

    this.mails = this.route.params.map((params: Params) => {
      this.type = params['type'];
      switch (this.type) {
        case 'inbox':
          this.in = true;
          this.se = false;
          return this.service.getInboxMails();
        case 'starred':
          return this.service.getStarredMails();
        case 'sent':
            this.se = true;
            this.in = false;
          return this.service.getSentMails();
        case 'drafts':
          return this.service.getDraftMails();
        case 'trash':
          return this.service.getTrashMails();
        default:
          return this.service.getInboxMails();
      }
    });
  }

  public toggleAll() {
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
  }

  public goToDetail(mail: any) {
    mail.unread = false;
    this.router.navigate(['apps/email/mail-list/' + this.type, mail.id]);
  }

  public changeStarStatus(mail: any) {
    mail.starred = !mail.starred;
  }
}
