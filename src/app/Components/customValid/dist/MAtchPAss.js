"use strict";
exports.__esModule = true;
exports.passwordMatch = void 0;
// If validator has no parameters
exports.passwordMatch = function (frm) {
    var passControl = frm.get('password');
    var confirmPassControl = frm.get('confirmPassword');
    if (!passControl || !confirmPassControl || !passControl.value || !confirmPassControl.value)
        return null;
    var valErr = { 'UnmatchedPassword': { 'pass': passControl === null || passControl === void 0 ? void 0 : passControl.value, 'confrim': confirmPassControl === null || confirmPassControl === void 0 ? void 0 : confirmPassControl.value } };
    return ((passControl === null || passControl === void 0 ? void 0 : passControl.value) == (confirmPassControl === null || confirmPassControl === void 0 ? void 0 : confirmPassControl.value)) ? null : valErr;
};
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
