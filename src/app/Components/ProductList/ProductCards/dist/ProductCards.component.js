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
    function ProductCardsComponent(
    // To get data static UnComment line below
    // private prodCompService: ServicesProductComponentService,
    // To get data Dynamic by Api using line below
    prodComSer, router) {
        this.prodComSer = prodComSer;
        this.router = router;
        this.prodListMatchCategID = [];
        this.categIdSentByParentComp = 0;
    }
    ProductCardsComponent.prototype.deleteProduct = function (proID) {
        this.prodComSer.deleteProduct(proID);
    };
    ProductCardsComponent.prototype.ngOnInit = function () {
        // To get data static using line below
        // this.prodListMatchCategID = this.prodCompService.getAllProductsList();
        var _this = this;
        // To get data Dynamic by Api using line below
        this.prodComSer.getAllProduct().subscribe(function (prod) {
            _this.prodListMatchCategID = prod;
        });
    };
    ProductCardsComponent.prototype.ngOnChanges = function () {
        // To get data static using line below
        // this.prodListMatchCategID = this.prodCompService.getProdMatchsCategoryId(
        //   this.categIdSentByParentComp);
        var _this = this;
        // To get data Dynamic by Api using line below
        this.prodComSer
            .getProductByCatId(this.categIdSentByParentComp)
            .subscribe(function (prod) {
            _this.prodListMatchCategID = prod;
        });
    };
    __decorate([
        core_1.Input()
    ], ProductCardsComponent.prototype, "categIdSentByParentComp");
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
