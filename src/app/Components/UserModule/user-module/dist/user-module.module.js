"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserModuleModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var add_user_profile_component_1 = require("../AddUserProfile/add-user-profile/add-user-profile.component");
var edit_user_profile_component_1 = require("../EditUserProfile/edit-user-profile/edit-user-profile.component");
var router_1 = require("@angular/router");
var guard_user_access_guard_1 = require("src/app/Guards/guard-user-access.guard");
var routes = [
    { path: '', redirectTo: '/User/UserProfile', pathMatch: 'full' },
    { path: 'UserProfile', component: add_user_profile_component_1.AddUserProfileComponent, canActivate: [guard_user_access_guard_1.GuardUserAccessGuard] },
    { path: 'EditProfile', component: edit_user_profile_component_1.EditUserProfileComponent, canActivate: [guard_user_access_guard_1.GuardUserAccessGuard] }
];
var UserModuleModule = /** @class */ (function () {
    function UserModuleModule() {
    }
    UserModuleModule = __decorate([
        core_1.NgModule({
            declarations: [
                add_user_profile_component_1.AddUserProfileComponent,
                edit_user_profile_component_1.EditUserProfileComponent
            ],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(routes)
            ]
        })
    ], UserModuleModule);
    return UserModuleModule;
}());
exports.UserModuleModule = UserModuleModule;
