var scopeLosingExample = {
    text: "Property from lexical scope",
    run: function () {
        setTimeout(function () {
            alert(this.text);
        }, 1000);
    }
};
// alerts undefined
scopeLosingExample.run();
var scopePreservingExample = {
    text: "Property from lexical scope",
    run: function () {
        var _this = this;
        setTimeout(function () {
            alert(_this.text);
        }, 1000);
    }
};
// alerts "Property from lexical scope"
scopePreservingExample.run();
