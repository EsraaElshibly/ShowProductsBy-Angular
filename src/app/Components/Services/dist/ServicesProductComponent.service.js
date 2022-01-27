"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ServicesProductComponentService = void 0;
var core_1 = require("@angular/core");
var ServicesProductComponentService = /** @class */ (function () {
    function ServicesProductComponentService() {
        this.prodList = [
            {
                ID: 11,
                name: 'Tablet2020',
                quantity: 0,
                price: 1000,
                imageURL: 'https://picsum.photos/200',
                categoryID: 1
            },
            {
                ID: 100,
                name: 'Tablet2021',
                quantity: 1,
                price: 10900,
                imageURL: 'https://picsum.photos/200',
                categoryID: 1
            },
            {
                ID: 92,
                name: 'Apple Phone',
                quantity: 10,
                price: 10290,
                imageURL: 'https://picsum.photos/200',
                categoryID: 2
            },
            {
                ID: 42,
                name: 'Phone2021',
                quantity: 1,
                price: 13000,
                imageURL: 'https://picsum.photos/200',
                categoryID: 2
            },
            {
                ID: 35,
                name: 'Laptop2020',
                quantity: 80,
                price: 10500,
                imageURL: 'https://picsum.photos/200',
                categoryID: 3
            },
            {
                ID: 83,
                name: 'Laptop2021',
                quantity: 0,
                price: 10800,
                imageURL: 'https://picsum.photos/200',
                categoryID: 3
            },
        ];
    }
    ServicesProductComponentService.prototype.getAllProductsList = function () {
        return this.prodList;
    };
    //get product by his id
    ServicesProductComponentService.prototype.reciveProductByItsID = function (prodId) {
        var selecteProddId = this.prodList.find(function (prod) { return prod.ID == prodId; });
        return selecteProddId;
    };
    ServicesProductComponentService.prototype.returnProductId = function () {
        var productId = this.prodList.map(function (prod) { return prod.ID; });
        return productId;
    };
    //get product that matches selected categogry id
    ServicesProductComponentService.prototype.getProdMatchsCategoryId = function (categId) {
        if (categId == 0) {
            return this.prodList;
        }
        else {
            var selectedProd = this.prodList.filter(function (prod) { return prod.categoryID == categId; });
            return selectedProd;
        }
    };
    ServicesProductComponentService.prototype.addNewProduct = function (product) {
        this.prodList.push(product);
    };
    ServicesProductComponentService.prototype.getProdBySpecificId = function (id) {
        var product = this.prodList.find(function (prod) { return prod.ID == id; });
        return product ? product : null;
    };
    ServicesProductComponentService.prototype.updateProductByServices = function (updateProdList) {
        for (var i in this.prodList) {
            if (this.prodList[i].ID == updateProdList.ID) {
                this.prodList[i] = updateProdList;
            }
        }
    };
    ServicesProductComponentService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ServicesProductComponentService);
    return ServicesProductComponentService;
}());
exports.ServicesProductComponentService = ServicesProductComponentService;
