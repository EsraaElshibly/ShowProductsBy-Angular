import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthdayFromID'
})
export class BirthdayFromIDPipe implements PipeTransform {

  transform(value: any): any {
    let birthDate = ''
    let yearBirthDate = value.substring(1,3)
    let monthBirthDate = value.substring(3,5)
    let dayBirthDate = value.substring(5,7)
    let date = (new Date()).getFullYear()-2000

    birthDate = (yearBirthDate > date ? '19':'20') + yearBirthDate + '-' + monthBirthDate + '-' + dayBirthDate
    
    return birthDate;
  }

}
