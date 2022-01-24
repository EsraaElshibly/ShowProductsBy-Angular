import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthdayFromID'
})
export class BirthdayFromIDPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
