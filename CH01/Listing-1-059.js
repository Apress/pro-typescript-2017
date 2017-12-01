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
var Handler = /** @class */ (function () {
    function Handler() {
    }
    return Handler;
}());
var RandomHandler = /** @class */ (function (_super) {
    __extends(RandomHandler, _super);
    function RandomHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RandomHandler;
}(Handler));
var ReversedHandler = /** @class */ (function (_super) {
    __extends(ReversedHandler, _super);
    function ReversedHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ReversedHandler;
}(Handler));
var HandlerFactory = /** @class */ (function () {
    function HandlerFactory() {
    }
    HandlerFactory.prototype.getHandler = function (type) {
        switch (type) {
            case 'Random':
                return new RandomHandler();
            case 'Reversed':
                return new ReversedHandler();
            default:
                return new Handler();
        }
    };
    return HandlerFactory;
}());
