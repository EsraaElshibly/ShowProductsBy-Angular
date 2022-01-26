"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddNewProductComponent = void 0;
var core_1 = require("@angular/core");
var AddNewProductComponent = /** @class */ (function () {
    function AddNewProductComponent(productServices) {
        this.productServices = productServices;
    }
    AddNewProductComponent.prototype.ngOnInit = function () {
    };
    AddNewProductComponent.prototype.addNewProduct = function (IDp, nameProd, quanPrpd, priceProd, imgPro) {
        this.newProdList = {
            ID: Number(IDp),
            name: nameProd,
            quantity: Number(quanPrpd),
            price: Number(priceProd),
            imageURL: imgPro
        };
        this.productServices.addNewProduct(this.newProdList);
        this.clearInput();
    };
    AddNewProductComponent.prototype.clearInput = function () {
        this.changeID.nativeElement.value = '';
        this.changeName.nativeElement.value = '';
        this.changeQuan.nativeElement.value = '';
        this.changePrice.nativeElement.value = '';
        this.changeImg.nativeElement.value = '';
    };
    __decorate([
        core_1.ViewChild('IDp')
    ], AddNewProductComponent.prototype, "changeID");
    __decorate([
        core_1.ViewChild('prdName')
    ], AddNewProductComponent.prototype, "changeName");
    __decorate([
        core_1.ViewChild('prdQuan')
    ], AddNewProductComponent.prototype, "changeQuan");
    __decorate([
        core_1.ViewChild('prdPrice')
    ], AddNewProductComponent.prototype, "changePrice");
    __decorate([
        core_1.ViewChild('prdImg')
    ], AddNewProductComponent.prototype, "changeImg");
    AddNewProductComponent = __decorate([
        core_1.Component({
            selector: 'app-add-new-product',
            templateUrl: './add-new-product.component.html',
            styleUrls: ['./add-new-product.component.scss']
        })
    ], AddNewProductComponent);
    return AddNewProductComponent;
}());
exports.AddNewProductComponent = AddNewProductComponent;
