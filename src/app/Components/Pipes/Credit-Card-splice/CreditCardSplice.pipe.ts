import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CreditCardSplice'
})
export class CreditCardSplicePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/\s+/g , '').replace(/(\d{4})/g , '$1 -').trim();
  }

}
