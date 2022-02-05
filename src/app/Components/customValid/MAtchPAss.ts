import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// If validator has no parameters
export const passwordMatch: ValidatorFn =
  (frm: AbstractControl): ValidationErrors | null => {
    let passControl= frm.get('password');
    let confirmPassControl= frm.get('confirmPassword');
    if(!passControl || !confirmPassControl || !passControl.value || !confirmPassControl.value)
      return null;

    let valErr={'UnmatchedPassword': {'pass': passControl?.value, 'confrim': confirmPassControl?.value}}
    return (passControl?.value==confirmPassControl?.value)? null : valErr;
  }

  // Check if password and comfirmPassword is matches or not
  // export function passwordMatchAdv(complexPassword: boolean=false): ValidatorFn
  // {
  //   //If complextPassword?, check fullname not included in password
  //   return (control: AbstractControl) : ValidationErrors | null=>{
  //     let passControl= control.get('password');
  //     let confirmPassControl= control.get('confirmPassword');
  //     if(!passControl || !confirmPassControl || !passControl.value || !confirmPassControl.value)
  //       return null;
  
  //     let valErr={'UnmatchedPassword': {'pass': passControl?.value, 'confrim': confirmPassControl?.value}}
  //     return (passControl?.value==confirmPassControl?.value)? null : valErr;
  //   }
  // }
  