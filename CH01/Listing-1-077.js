var ClickCounter = /** @class */ (function () {
    function ClickCounter() {
        this.count = 0;
    }
    ClickCounter.prototype.registerClick = function () {
        this.count++;
        alert(this.count);
    };
    return ClickCounter;
}());
var clickCounter = new ClickCounter();
document.getElementById('target').onclick = clickCounter.registerClick;
