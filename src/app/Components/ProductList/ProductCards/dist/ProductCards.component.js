"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductCardsComponent = void 0;
var core_1 = require("@angular/core");
var ProductCardsComponent = /** @class */ (function () {
    function ProductCardsComponent(prodCompService, router) {
        this.prodCompService = prodCompService;
        this.router = router;
        this.prodListMatchCategID = [];
        this.categIdSentByParentComp = 0;
    }
    ProductCardsComponent.prototype.ngOnInit = function () {
        this.prodListMatchCategID = this.prodCompService.getAllProductsList();
    };
    ProductCardsComponent.prototype.ngOnChanges = function () {
        this.prodListMatchCategID = this.prodCompService.getProdMatchsCategoryId(this.categIdSentByParentComp);
    };
    ProductCardsComponent = __decorate([
        core_1.Component({
            selector: 'app-ProductCards',
            templateUrl: './ProductCards.component.html',
            styleUrls: ['./ProductCards.component.scss']
        })
    ], ProductCardsComponent);
    return ProductCardsComponent;
}());
exports.ProductCardsComponent = ProductCardsComponent;
