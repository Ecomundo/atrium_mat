import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MailService } from '../mail.service';
import { Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MailOpen } from '../mail.model';

@Component({
  selector: 'app-mail-detail',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mail-detail.component.html'
})
export class MailDetailComponent implements OnInit {
  public mail: MailOpen[] = [];
  public id: any;
  public type: any;
  public ml = false;

  @Output() replyMessage = new EventEmitter();

  constructor(private service: MailService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.type = this.route.snapshot.paramMap.get('type');
    this.service.getOpenMensa().toPromise().then(x => { this.mail = x as MailOpen[]; this.ml = true; });
  }

  /*goToReply(mail): void {
    this.replyMessage.emit(mail);
  }*/

}
