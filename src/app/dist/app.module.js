"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./Components/header/header.component");
var footer_component_1 = require("./Components/footer/footer.component");
var products_component_1 = require("./Components/ProductList/productsTable/products.component");
var sidebar_component_1 = require("./Components/sidebar/sidebar.component");
var forms_1 = require("@angular/forms");
var box_style_directive_1 = require("./Components/Directives/box-style.directive");
var currency_pipe_pipe_1 = require("./Components/Pipes/CurrencyPipe/currency-pipe.pipe");
var CreditCardSplice_pipe_1 = require("./Components/Pipes/Credit-Card-splice/CreditCardSplice.pipe");
var birthday_from_id_pipe_1 = require("./Components/Pipes/BirthdayPipe/birthday-from-id.pipe");
var order_details_component_1 = require("./Components/ProductList/order-details/order-details.component");
var Home_component_1 = require("./Components/Home/Home.component");
var ProductCards_component_1 = require("./Components/ProductList/ProductCards/ProductCards.component");
var main_routing_component_1 = require("./Components/main-routing/main-routing.component");
var log_in_form_component_1 = require("./Components/log-in-form/log-in-form.component");
var product_details_component_1 = require("./Components/ProductList/product-details/product-details.component");
var add_new_product_component_1 = require("./Components/ProductList/add-new-product/add-new-product.component");
var edit_product_component_1 = require("./Components/ProductList/edit-product/edit-product.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                Home_component_1.HomeComponent,
                products_component_1.ProductsComponent,
                sidebar_component_1.SidebarComponent,
                box_style_directive_1.BoxStyleDirective,
                birthday_from_id_pipe_1.BirthdayFromIDPipe,
                currency_pipe_pipe_1.CurrencyPipePipe,
                CreditCardSplice_pipe_1.CreditCardSplicePipe,
                birthday_from_id_pipe_1.BirthdayFromIDPipe,
                order_details_component_1.OrderDetailsComponent,
                ProductCards_component_1.ProductCardsComponent,
                main_routing_component_1.MainRoutingComponent,
                log_in_form_component_1.LogInFormComponent,
                product_details_component_1.ProductDetailsComponent,
                add_new_product_component_1.AddNewProductComponent,
                edit_product_component_1.EditProductComponent
            ],
            imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, forms_1.FormsModule, http_1.HttpClientModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
