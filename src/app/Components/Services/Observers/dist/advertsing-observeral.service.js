"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdvertsingObserveralService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var AdvertsingObserveralService = /** @class */ (function () {
    function AdvertsingObserveralService() {
        this.advertisingObserve = [
            "Sale Up To 70%",
            "Winter Sale up to 30%",
            "Black Friday Sale",
            "Check our last season sale",
        ];
    }
    AdvertsingObserveralService.prototype.makeTimeBetweenAdvertising = function (timeInSec) {
        var _this = this;
        return new rxjs_1.Observable(function (observerParam) {
            var startTimer = 0;
            var advertisingTimer = setInterval(function () {
                // each comp which show obserce and subscribe it understand that there is upcoming adver
                if (startTimer == _this.advertisingObserve.length) {
                    observerParam.complete();
                }
                //  Handle Error
                if (_this.advertisingObserve[startTimer] == '') {
                    observerParam.error('There are Empty String');
                }
                observerParam.next(_this.advertisingObserve[startTimer]);
                startTimer++;
            }, timeInSec * 1000);
            return {
                unsubscribe: function () {
                    // Stop Interval
                    clearInterval(advertisingTimer);
                    console.log('Interval is decleared');
                }
            };
        });
    };
    AdvertsingObserveralService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AdvertsingObserveralService);
    return AdvertsingObserveralService;
}());
exports.AdvertsingObserveralService = AdvertsingObserveralService;
