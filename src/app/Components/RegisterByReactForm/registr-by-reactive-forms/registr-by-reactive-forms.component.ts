import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { UserReg } from 'src/app/Models/UserReg/user-reg';
import { passwordMatch } from '../../customValid/MAtchPAss';

@Component({
  selector: 'app-registr-by-reactive-forms',
  templateUrl: './registr-by-reactive-forms.component.html',
  styleUrls: ['./registr-by-reactive-forms.component.scss'],
})
export class RegistrByReactiveFormsComponent implements OnInit {
  regestierForm: FormGroup;
  existUserEmails: string[] = [];
  userRegModel?: UserReg;

  constructor(private frmBuld: FormBuilder) {
    // this.existUserEmails=["esraa@gmail.com", "test@gmail.com", "abc@gmail.com"];

    // Way that use FormBuilder from formGroup and use it in constructor
    this.regestierForm = frmBuld.group({
      fullName: ['', [Validators.required, Validators.pattern('[a-zA-z]{5,}')]],
      // if user has one phone number using below line
      // phoneNum: [''],
      // if user has more phone number using below line

      phoneNum: frmBuld.array([this.frmBuld.control('')], Validators.required),
      userEmail: ['', [Validators.required, this.checkEmailValidators()]],
      password: ['', [Validators.required] ],
      confirmPassword: ['', [Validators.required] ],
      address: frmBuld.group({
        city: [''],
        postalCode: [''], // or: postalCode: frmBuld.control('')
        street: [''],
      }),
      referral: [''],
      referralOther: [''],
    }, {validators: passwordMatch});

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

  ngOnInit(): void {}

  // function to make properity to handle bind error showing
  get fullNameInp() {
    return this.regestierForm.get('fullName');
  }

  get phoneNumInp() {
    return this.regestierForm.get('phoneNum') as FormArray;
  }

  get emailInp() {
    return this.regestierForm.get('userEmail');
  }

  get passwordInp() {
    return this.regestierForm.get('password');
  }

  get confirmPassword() {
    return this.regestierForm.get('confirmPassword');
  }

  get referral() {
    return this.regestierForm.get('referral');
  }

  // Submit data and send it to api but i don't have actual api to send data on it, So making log for data
  handleSubmit() {
    this.userRegModel = this.regestierForm.value as UserReg;
    console.log(this.userRegModel);
  }

  handleAddPhoneNum(event: any) {
    this.phoneNumInp.push(this.frmBuld.control(''));
  }

  handleRemovehoneNum(i: number, event: any) {
    this.phoneNumInp.removeAt(i)
  }

  makingReferalValide() {
    if (this.referral?.value == 'other') {
      this.regestierForm
        .get('referralOther')
        ?.addValidators([Validators.required]);
    } else {
      this.regestierForm.get('referralOther')?.clearValidators();
    }
    this.regestierForm.get('referralOther')?.updateValueAndValidity();
  }

  // Using Custom validators in email#
  checkEmailValidators(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let emailVal: string = control.value;

      if (emailVal.length == 0 && control.untouched) {
        return null;
      } else {
        let validatorError = { 'EmailNotValid': { 'value': emailVal } };
        return emailVal.includes('.com') ? null : validatorError;
      }
    };
  }
}
