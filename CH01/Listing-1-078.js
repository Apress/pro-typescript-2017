var Listing_1_78;
(function (Listing_1_78) {
    var ClickCounter = /** @class */ (function () {
        function ClickCounter() {
            var _this = this;
            this.count = 0;
            this.registerClick = function () {
                _this.count++;
                alert(_this.count);
            };
        }
        return ClickCounter;
    }());
})(Listing_1_78 || (Listing_1_78 = {}));
