"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddUserProfileComponent = void 0;
var core_1 = require("@angular/core");
var AddUserProfileComponent = /** @class */ (function () {
    function AddUserProfileComponent(userAuthentation) {
        this.userAuthentation = userAuthentation;
        this.uName = "";
        this.isUser = this.userAuthentation.isUserLogged;
    }
    AddUserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userAuthentation.getLoggedStatus().subscribe(function (status) {
            _this.isUser = status;
        });
        this.userAuthentation.getUserName().subscribe(function (name) {
            _this.uName = name;
        });
    };
    AddUserProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-add-user-profile',
            templateUrl: './add-user-profile.component.html',
            styleUrls: ['./add-user-profile.component.scss']
        })
    ], AddUserProfileComponent);
    return AddUserProfileComponent;
}());
exports.AddUserProfileComponent = AddUserProfileComponent;
