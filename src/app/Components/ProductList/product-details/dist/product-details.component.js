"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductDetailsComponent = void 0;
var core_1 = require("@angular/core");
var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(prodCompService, router, activeRouter, loc) {
        this.prodCompService = prodCompService;
        this.router = router;
        this.activeRouter = activeRouter;
        this.loc = loc;
        this.arrayOfProductsId = [];
        this.productCurrentId = 0;
        this.prodList = null;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.arrayOfProductsId = this.prodCompService.returnProductId();
        this.activeRouter.paramMap.subscribe(function (paramMap) {
            _this.productCurrentId = Number(paramMap.get('productId'));
            _this.prodList = _this.prodCompService.reciveProductByItsID(_this.productCurrentId);
        });
    };
    ProductDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-product-details',
            templateUrl: './product-details.component.html',
            styleUrls: ['./product-details.component.scss']
        })
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());
exports.ProductDetailsComponent = ProductDetailsComponent;
