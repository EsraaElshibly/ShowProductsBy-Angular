"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EditProductComponent = void 0;
var core_1 = require("@angular/core");
var EditProductComponent = /** @class */ (function () {
    function EditProductComponent(prodCompService, router, activeRouter) {
        this.prodCompService = prodCompService;
        this.router = router;
        this.activeRouter = activeRouter;
        this.updateProdList = {};
        this.prodSent = {};
        this.ID = 0;
    }
    EditProductComponent.prototype.ngAfterViewInit = function () {
        if (this.ID > 0) {
            this.updateProduct();
        }
    };
    EditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.paramMap.subscribe(function (paramMap) {
            _this.ID = Number(paramMap.get('id'));
            console.log(_this.ID);
            _this.updateProdList = _this.prodCompService.getProdBySpecificId(_this.ID);
            console.log(_this.updateProdList);
        });
    };
    EditProductComponent.prototype.EditProduct = function (IDp, nameProd, quanPrpd, priceProd, imgPro) {
        this.prodSent = {
            ID: Number(IDp),
            name: nameProd,
            quantity: Number(quanPrpd),
            price: Number(priceProd),
            imageURL: imgPro
        };
        this.prodCompService.updateProductByServices(this.prodSent);
        this.clearInput();
    };
    EditProductComponent.prototype.clearInput = function () {
        this.changeID.nativeElement.value = '';
        this.changeName.nativeElement.value = '';
        this.changeQuan.nativeElement.value = '';
        this.changePrice.nativeElement.value = '';
        this.changeImg.nativeElement.value = '';
    };
    EditProductComponent.prototype.updateProduct = function () {
        var _a, _b, _c, _d, _e;
        this.changeID.nativeElement.value = (_a = this.updateProdList) === null || _a === void 0 ? void 0 : _a.ID;
        this.changeName.nativeElement.value = (_b = this.updateProdList) === null || _b === void 0 ? void 0 : _b.name;
        this.changeQuan.nativeElement.value = (_c = this.updateProdList) === null || _c === void 0 ? void 0 : _c.quantity;
        this.changePrice.nativeElement.value = (_d = this.updateProdList) === null || _d === void 0 ? void 0 : _d.price;
        this.changeImg.nativeElement.value = (_e = this.updateProdList) === null || _e === void 0 ? void 0 : _e.imageURL;
    };
    __decorate([
        core_1.ViewChild('IDp')
    ], EditProductComponent.prototype, "changeID");
    __decorate([
        core_1.ViewChild('prdName')
    ], EditProductComponent.prototype, "changeName");
    __decorate([
        core_1.ViewChild('prdQuan')
    ], EditProductComponent.prototype, "changeQuan");
    __decorate([
        core_1.ViewChild('prdPrice')
    ], EditProductComponent.prototype, "changePrice");
    __decorate([
        core_1.ViewChild('prdImg')
    ], EditProductComponent.prototype, "changeImg");
    EditProductComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-product',
            templateUrl: './edit-product.component.html',
            styleUrls: ['./edit-product.component.scss']
        })
    ], EditProductComponent);
    return EditProductComponent;
}());
exports.EditProductComponent = EditProductComponent;
