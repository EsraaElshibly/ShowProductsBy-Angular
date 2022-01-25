"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var product_data_1 = require("src/app/ViewModels/product-data");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.firstProductInfo = new product_data_1["default"]('First-Product', ['cairo', 'Aswan', 'Alex', 'Ismalia'], 'https://picsum.photos/200');
        this.secProdIcfo = new product_data_1["default"]('Second-Product', ['Luxor', 'Benha', 'Maadi', 'October'], 'https://picsum.photos/200');
        this.thirdProdInfo = new product_data_1["default"]('Third-Product', ['Dummiat', 'Mansoura', 'Shobra', 'Ismalia'], 'https://picsum.photos/200');
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-Home',
            templateUrl: './Home.component.html',
            styleUrls: ['./Home.component.scss']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
