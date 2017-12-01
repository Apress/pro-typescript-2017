var Listing_8_002;
(function (Listing_8_002) {
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
})(Listing_8_002 || (Listing_8_002 = {}));
