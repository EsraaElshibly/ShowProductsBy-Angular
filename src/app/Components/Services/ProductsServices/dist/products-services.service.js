"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductsServicesService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var ProductsServicesService = /** @class */ (function () {
    function ProductsServicesService(httpClientServices) {
        this.httpClientServices = httpClientServices;
    }
    ProductsServicesService.prototype.getAllProduct = function () {
        return this.httpClientServices.get(environment_1.environment.apiURL + "products");
    };
    ProductsServicesService.prototype.getProductByCatId = function (catId) {
        return this.httpClientServices.get(environment_1.environment.apiURL + "products?categoryId = " + catId);
    };
    ProductsServicesService.prototype.getProductByProdId = function (prodId) {
        return this.httpClientServices.get(environment_1.environment.apiURL + "products/" + prodId);
    };
    ProductsServicesService.prototype.addProduct = function (newProdList) {
    };
    ProductsServicesService.prototype.updateProduct = function (prodId, updateProdList) {
    };
    ProductsServicesService.prototype.deleteProduct = function (prodId) {
    };
    ProductsServicesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProductsServicesService);
    return ProductsServicesService;
}());
exports.ProductsServicesService = ProductsServicesService;
