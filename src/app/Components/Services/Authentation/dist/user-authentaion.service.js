"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserAuthentaionService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UserAuthentaionService = /** @class */ (function () {
    function UserAuthentaionService() {
        this.isLogin = new rxjs_1.BehaviorSubject(this.isUserLogged);
        this.uName = new rxjs_1.BehaviorSubject("");
    }
    UserAuthentaionService.prototype.logIn = function (uName, pass) {
        var userToken = "122345";
        localStorage.setItem("token", userToken);
        this.isLogin.next(true);
        this.uName.next(uName);
    };
    UserAuthentaionService.prototype.logOut = function () {
        localStorage.removeItem("token");
        this.isLogin.next(false);
        this.uName.next("");
    };
    Object.defineProperty(UserAuthentaionService.prototype, "isUserLogged", {
        get: function () {
            return (localStorage.getItem("token")) ? true : false;
        },
        enumerable: false,
        configurable: true
    });
    UserAuthentaionService.prototype.getLoggedStatus = function () {
        return this.isLogin.asObservable();
    };
    UserAuthentaionService.prototype.getUserName = function () {
        return this.uName.asObservable();
    };
    UserAuthentaionService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserAuthentaionService);
    return UserAuthentaionService;
}());
exports.UserAuthentaionService = UserAuthentaionService;
