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
var ApplicationError = /** @class */ (function () {
    function ApplicationError(message) {
        this.message = message;
        this.name = 'ApplicationError';
        if (typeof console !== 'undefined') {
            console.log("Creating " + this.name + " \"" + message + "\"");
        }
    }
    ApplicationError.prototype.toString = function () {
        return this.name + ": {this.message}";
    };
    return ApplicationError;
}());
var InputError = /** @class */ (function (_super) {
    __extends(InputError, _super);
    function InputError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InputError;
}(ApplicationError));
function errorsOnThree(input) {
    if (input === 3) {
        throw new InputError('Three is not allowed');
    }
    return input;
}
