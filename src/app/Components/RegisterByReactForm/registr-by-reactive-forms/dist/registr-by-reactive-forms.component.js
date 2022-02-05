"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegistrByReactiveFormsComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var MAtchPAss_1 = require("../../customValid/MAtchPAss");
var RegistrByReactiveFormsComponent = /** @class */ (function () {
    function RegistrByReactiveFormsComponent(frmBuld) {
        // this.existUserEmails=["esraa@gmail.com", "test@gmail.com", "abc@gmail.com"];
        this.frmBuld = frmBuld;
        this.existUserEmails = [];
        // Way that use FormBuilder from formGroup and use it in constructor
        this.regestierForm = frmBuld.group({
            fullName: ['', [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-z]{5,}')]],
            // if user has one phone number using below line
            // phoneNum: [''],
            // if user has more phone number using below line
            phoneNum: frmBuld.array([this.frmBuld.control('')], forms_1.Validators.required),
            userEmail: ['', [forms_1.Validators.required, this.checkEmailValidators()]],
            password: ['', [forms_1.Validators.required]],
            confirmPassword: ['', [forms_1.Validators.required]],
            address: frmBuld.group({
                city: [''],
                postalCode: [''],
                street: ['']
            }),
            referral: [''],
            referralOther: ['']
        }, { validators: MAtchPAss_1.passwordMatch });
        // Default way to creat ReactiveForm by using ts and bind it by html file
        // this.regestierForm = new FormGroup({
        //   fullName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-z]{3,}')]),
        //   phoneNum: new FormControl(''),
        //   userEmail: new FormControl(''),
        //   password: new FormControl(''),
        //   confirmPassword: new FormControl(''),
        //   address: new FormGroup({
        //     city: new FormControl(''),
        //     postalCode: new FormControl(''),
        //     street: new FormControl(''),
        //   }),
        // });
    }
    RegistrByReactiveFormsComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(RegistrByReactiveFormsComponent.prototype, "fullNameInp", {
        // function to make properity to handle bind error showing
        get: function () {
            return this.regestierForm.get('fullName');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegistrByReactiveFormsComponent.prototype, "phoneNumInp", {
        get: function () {
            return this.regestierForm.get('phoneNum');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegistrByReactiveFormsComponent.prototype, "emailInp", {
        get: function () {
            return this.regestierForm.get('userEmail');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegistrByReactiveFormsComponent.prototype, "passwordInp", {
        get: function () {
            return this.regestierForm.get('password');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegistrByReactiveFormsComponent.prototype, "confirmPassword", {
        get: function () {
            return this.regestierForm.get('confirmPassword');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RegistrByReactiveFormsComponent.prototype, "referral", {
        get: function () {
            return this.regestierForm.get('referral');
        },
        enumerable: false,
        configurable: true
    });
    // Submit data and send it to api but i don't have actual api to send data on it, So making log for data
    RegistrByReactiveFormsComponent.prototype.handleSubmit = function () {
        this.userRegModel = this.regestierForm.value;
        console.log(this.userRegModel);
    };
    RegistrByReactiveFormsComponent.prototype.handleAddPhoneNum = function () {
        this.phoneNumInp.push(this.frmBuld.control(''));
    };
    RegistrByReactiveFormsComponent.prototype.makingReferalValide = function () {
        var _a, _b, _c, _d;
        if (((_a = this.referral) === null || _a === void 0 ? void 0 : _a.value) == 'other') {
            (_b = this.regestierForm
                .get('referralOther')) === null || _b === void 0 ? void 0 : _b.addValidators([forms_1.Validators.required]);
        }
        else {
            (_c = this.regestierForm.get('referralOther')) === null || _c === void 0 ? void 0 : _c.clearValidators();
        }
        (_d = this.regestierForm.get('referralOther')) === null || _d === void 0 ? void 0 : _d.updateValueAndValidity();
    };
    // Using Custom validators in email#
    RegistrByReactiveFormsComponent.prototype.checkEmailValidators = function () {
        return function (control) {
            var emailVal = control.value;
            if (emailVal.length == 0 && control.untouched) {
                return null;
            }
            else {
                var validatorError = { 'EmailNotValid': { 'value': emailVal } };
                return emailVal.includes('.com') ? null : validatorError;
            }
        };
    };
    RegistrByReactiveFormsComponent = __decorate([
        core_1.Component({
            selector: 'app-registr-by-reactive-forms',
            templateUrl: './registr-by-reactive-forms.component.html',
            styleUrls: ['./registr-by-reactive-forms.component.scss']
        })
    ], RegistrByReactiveFormsComponent);
    return RegistrByReactiveFormsComponent;
}());
exports.RegistrByReactiveFormsComponent = RegistrByReactiveFormsComponent;
