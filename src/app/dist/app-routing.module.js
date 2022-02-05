"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var main_routing_component_1 = require("./Components/main-routing/main-routing.component");
var Home_component_1 = require("././Components/Home/Home.component");
var order_details_component_1 = require("./Components/ProductList/order-details/order-details.component");
var log_in_form_component_1 = require("./Components/log-in-form/log-in-form.component");
var ProductCards_component_1 = require("./Components/ProductList/ProductCards/ProductCards.component");
var product_details_component_1 = require("./Components/ProductList/product-details/product-details.component");
var add_new_product_component_1 = require("./Components/ProductList/add-new-product/add-new-product.component");
var edit_product_component_1 = require("./Components/ProductList/edit-product/edit-product.component");
var guard_user_access_guard_1 = require("./Guards/guard-user-access.guard");
var add_product_with_api_component_1 = require("./Components/ProductList/AddProductByusingAPI/add-product-with-api/add-product-with-api.component");
var registr_by_reactive_forms_component_1 = require("./Components/RegisterByReactForm/registr-by-reactive-forms/registr-by-reactive-forms.component");
var routes = [
    {
        path: '',
        component: main_routing_component_1.MainRoutingComponent,
        children: [
            { path: '', redirectTo: '/Home', pathMatch: 'full' },
            { path: 'Home', component: Home_component_1.HomeComponent },
            { path: 'Products', component: order_details_component_1.OrderDetailsComponent },
            {
                path: 'ProdCard',
                component: ProductCards_component_1.ProductCardsComponent,
                canActivate: [guard_user_access_guard_1.GuardUserAccessGuard]
            },
            { path: 'Products/:prodId', component: product_details_component_1.ProductDetailsComponent },
            { path: 'AddProduct', component: add_new_product_component_1.AddNewProductComponent },
            { path: 'AddNewProd', component: add_product_with_api_component_1.AddProductWithAPIComponent },
            { path: 'EditProduct/:id', component: edit_product_component_1.EditProductComponent },
            // Using another Module [Lazy Loading] to split any application into modules[best paractice]
            {
                path: 'User',
                loadChildren: function () {
                    return Promise.resolve().then(function () { return require('src/app/Components/UserModule/user-module/user-module.module'); }).then(function (m) { return m.UserModuleModule; });
                }
            },
        ]
    },
    { path: 'Log', component: log_in_form_component_1.LogInFormComponent },
    { path: 'Register', component: registr_by_reactive_forms_component_1.RegistrByReactiveFormsComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
