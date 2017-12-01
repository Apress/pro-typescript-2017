var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Display = /** @class */ (function () {
    function Display() {
        this.name = '';
    }
    return Display;
}());
var Television = /** @class */ (function (_super) {
    __extends(Television, _super);
    function Television() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Television;
}(Display));
var HiFi = /** @class */ (function () {
    function HiFi() {
    }
    return HiFi;
}());
var display = new Display();
var television = new Television();
var hiFi = new HiFi();
var isDisplay;
// true
isDisplay = display instanceof Display;
// true (inherits from Display)
isDisplay = television instanceof Display;
// false
isDisplay = hiFi instanceof Display;
