var Listing_1_81;
(function (Listing_1_81) {
    var ClickCounter = /** @class */ (function () {
        function ClickCounter() {
            this.count = 0;
        }
        ClickCounter.prototype.registerClick = function (id) {
            this.count++;
            alert(this.count);
        };
        return ClickCounter;
    }());
    var clickCounter = new ClickCounter();
    document.getElementById('target').onclick = function (e) {
        var target = e.target || e.srcElement;
        clickCounter.registerClick(target.id);
    };
})(Listing_1_81 || (Listing_1_81 = {}));
