var Listing_5_10;
(function (Listing_5_10) {
    function go(callback) {
        callback.apply(this, ['Example Argument']);
    }
    function callbackFunction(arg) {
        alert(arg);
    }
    go(callbackFunction);
})(Listing_5_10 || (Listing_5_10 = {}));
