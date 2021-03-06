import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'MailSearch'
})
export class MailSearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    const searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(mail => {
        if (mail.detalle || mail.titulo) {
          if (mail.detalle.search(searchText) !== -1 || mail.titulo.search(searchText) !== -1) {
            return true;
          }
        }
      });
    }
  }
}
