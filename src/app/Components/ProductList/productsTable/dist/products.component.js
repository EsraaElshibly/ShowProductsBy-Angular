"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductsComponent = void 0;
var core_1 = require("@angular/core");
var categoryList_1 = require("../../../ViewModels/categoryList");
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(prodCompService, router) {
        this.prodCompService = prodCompService;
        this.router = router;
        this.displayTable = true;
        this.categIdSentByParentComp = 0;
        this.discount = categoryList_1.OffersDis.secDis;
        this.quan = 0;
        // selectedCatID:number = 0
        // Interface
        // categoryList: CategoryList[];
        // prodList: IProduct[];
        this.prodListMatchCategID = [];
        // this.categoryList = [
        //   { ID: 1, name: 'Tablet' },
        //   { ID: 2, name: 'Phone' },
        //   { ID: 3, name: 'Labtop' },
        // ];
        // this.prodList = [
        //   {
        //     ID: 21,
        //     name: 'Tablet2020',
        //     quantity: 0,
        //     price: 1000,
        //     imageURL: 'https://picsum.photos/200',
        //     categoryID: 1,
        //   },
        //   {
        //     ID: 11,
        //     name: 'Tablet2021',
        //     quantity: 1,
        //     price: 10900,
        //     imageURL: 'https://picsum.photos/200',
        //     categoryID: 1,
        //   },
        //   {
        //     ID: 12,
        //     name: 'Apple Phone',
        //     quantity: 10,
        //     price: 10290,
        //     imageURL: 'https://picsum.photos/200',
        //     categoryID: 2,
        //   },
        //   {
        //     ID: 23,
        //     name: 'Phone2021',
        //     quantity: 1,
        //     price: 13000,
        //     imageURL: 'https://picsum.photos/200',
        //     categoryID: 2,
        //   },
        //   {
        //     ID: 33,
        //     name: 'Laptop2020',
        //     quantity: 80,
        //     price: 10500,
        //     imageURL: 'https://picsum.photos/200',
        //     categoryID: 3,
        //   },
        //   {
        //     ID: 130,
        //     name: 'Laptop2021',
        //     quantity: 0,
        //     price: 10800,
        //     imageURL: 'https://picsum.photos/200',
        //     categoryID: 3,
        //   },
        // ];
        // this.prodMatchCategID = this.prodList;
        // The abvious line to show table when page reload
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.prodListMatchCategID = this.prodCompService.getAllProductsList();
    };
    ProductsComponent.prototype.ngOnChanges = function () {
        // this.prodFiltered();
        this.prodListMatchCategID = this.prodCompService.getProdMatchsCategoryId(this.categIdSentByParentComp);
    };
    // changeCat(event: any) {
    //   let id = this.categoryList.find((i) => i.ID == event)
    //   console.log(id?.ID);
    //   this.filtered = this.prodList.filter((i) => i.ID === id?.ID)
    //   return this.filtered
    // }
    // Function to Buy any Product
    ProductsComponent.prototype.buyProduct = function () {
        // this.prodList[2].quantity -= 1;
        // for (let index in this.prodList)
        // {
        //   console.log(index);
        //   this.prodList[index].quantity -= 1
        // }
    };
    // Function to filter products and return prod that matches CatID
    // prodFiltered() {
    //   if (this.categIdSentByParentComp == 0) {
    //     this.prodMatchCategID = this.prodList;
    //     // The abvious line to show table when page reload
    //   } else {
    //     this.prodMatchCategID = this.prodList.filter(
    //       (prod) => prod.categoryID == this.categIdSentByParentComp
    //     );
    //   }
    // }
    // prodFiltered() {
    //     this.prodMatchCategID = this.prodList.filter(
    //       (prod) => prod.categoryID == this.selectedCatID
    //     );
    // }
    ProductsComponent.prototype.openPrdDetails = function (prodID) {
        // this.router.navigateByUrl('/Products/' + prdID)
        this.router.navigate(['/Products', prodID]);
    };
    __decorate([
        core_1.Input()
    ], ProductsComponent.prototype, "categIdSentByParentComp");
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.scss']
        })
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
