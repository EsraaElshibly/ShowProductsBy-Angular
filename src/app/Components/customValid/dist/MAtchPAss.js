"use strict";
exports.__esModule = true;
exports.passwordMatchAdv = exports.passwordMatch = void 0;
// If validator has no parameters
exports.passwordMatch = function (frmGroup) {
    var passControl = frmGroup.get('password');
    var confirmPassControl = frmGroup.get('confirmPassword');
    if (!passControl || !confirmPassControl || !passControl.value || !confirmPassControl.value)
        return null;
    var valErr = { 'UnmatchedPassword': { 'pass': passControl === null || passControl === void 0 ? void 0 : passControl.value, 'confrim': confirmPassControl === null || confirmPassControl === void 0 ? void 0 : confirmPassControl.value } };
    return ((passControl === null || passControl === void 0 ? void 0 : passControl.value) == (confirmPassControl === null || confirmPassControl === void 0 ? void 0 : confirmPassControl.value)) ? null : valErr;
};
// Check if password and comfirmPassword is matches or not
function passwordMatchAdv(complexPassword) {
    if (complexPassword === void 0) { complexPassword = false; }
    //If complextPassword?, check fullname not included in password
    return function (control) {
        var passControl = control.get('password');
        var confirmPassControl = control.get('confirmPassword');
        if (!passControl || !confirmPassControl || !passControl.value || !confirmPassControl.value)
            return null;
        var valErr = { 'UnmatchedPassword': { 'pass': passControl === null || passControl === void 0 ? void 0 : passControl.value, 'confrim': confirmPassControl === null || confirmPassControl === void 0 ? void 0 : confirmPassControl.value } };
        return ((passControl === null || passControl === void 0 ? void 0 : passControl.value) == (confirmPassControl === null || confirmPassControl === void 0 ? void 0 : confirmPassControl.value)) ? null : valErr;
    };
}
exports.passwordMatchAdv = passwordMatchAdv;
