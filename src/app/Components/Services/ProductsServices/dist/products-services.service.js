"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductsServicesService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var environment_1 = require("src/environments/environment");
var ProductsServicesService = /** @class */ (function () {
    function ProductsServicesService(httpClientServices) {
        this.httpClientServices = httpClientServices;
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    ProductsServicesService.prototype.getAllProduct = function () {
        return this.httpClientServices.get(environment_1.environment.apiURL + "products")
            .pipe(rxjs_1.retry(3), rxjs_1.catchError(this.handleError));
    };
    ProductsServicesService.prototype.getProductByCatId = function (catId) {
        return this.httpClientServices.get(environment_1.environment.apiURL + "products?categoryId = " + catId)
            .pipe(rxjs_1.retry(3), rxjs_1.catchError(this.handleError));
    };
    ProductsServicesService.prototype.getProductByProdId = function (prodId) {
        return this.httpClientServices.get(environment_1.environment.apiURL + "products/" + prodId)
            .pipe(rxjs_1.retry(3), rxjs_1.catchError(this.handleError));
    };
    ProductsServicesService.prototype.addProduct = function (newProdList) {
        // Simple way
        // return this.httpClientServices.post<IProduct>(
        //   `${environment.apiURL}products`,
        //   JSON.stringify(newProdList),
        //   this.httpOptions
        // );
        // Way By using pipe and handle error in request
        return this.httpClientServices
            .post(environment_1.environment.apiURL + "products", JSON.stringify(newProdList), this.httpOptions)
            .pipe(rxjs_1.retry(3), rxjs_1.catchError(this.handleError));
    };
    // updateProduct(prodId: number, updateProdList: IProduct): Observable<IProduct> {
    //   return this.httpClientServices.put<IProduct>(`${environment.apiURL}products/${prodId}`, updateProdList, this.httpClientServices)
    //   .pipe(retry(3), catchError(this.handleError));
    // }
    ProductsServicesService.prototype.deleteProduct = function (prodId) {
        return this.httpClientServices["delete"](environment_1.environment.apiURL + "products/" + prodId);
    };
    ProductsServicesService.prototype.handleError = function (error) {
        if (error.status === 0) {
            console.error('An error occured:', error.error);
        }
        else {
            console.error("returned code from backend " + error.status + " and error is:", error.error);
        }
        return rxjs_1.throwError(function () { return new Error('Sorry.. Something bad was happenning, Please Try again'); });
    };
    ProductsServicesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProductsServicesService);
    return ProductsServicesService;
}());
exports.ProductsServicesService = ProductsServicesService;
