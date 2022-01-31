"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddProductWithAPIComponent = void 0;
var core_1 = require("@angular/core");
var AddProductWithAPIComponent = /** @class */ (function () {
    function AddProductWithAPIComponent(prodService, router) {
        this.prodService = prodService;
        this.router = router;
        // catList: ICategory[];
        this.newProduct = {};
        this.categoryList = [
            { ID: 1, name: 'Tablet' },
            { ID: 2, name: 'Phone' },
            { ID: 3, name: 'Labtop' },
        ];
    }
    AddProductWithAPIComponent.prototype.ngOnInit = function () {
    };
    AddProductWithAPIComponent.prototype.addProduct = function () {
        var _this = this;
        var observer = {
            next: function (prd) {
                alert("Product added Successfuly");
                _this.router.navigateByUrl('/ProdCard');
            },
            error: function (err) { alert(err.message); }
        };
        this.prodService.addProduct(this.newProduct).subscribe(observer);
    };
    AddProductWithAPIComponent = __decorate([
        core_1.Component({
            selector: 'app-add-product-with-api',
            templateUrl: './add-product-with-api.component.html',
            styleUrls: ['./add-product-with-api.component.scss']
        })
    ], AddProductWithAPIComponent);
    return AddProductWithAPIComponent;
}());
exports.AddProductWithAPIComponent = AddProductWithAPIComponent;
