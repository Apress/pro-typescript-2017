var Listing_5_9;
(function (Listing_5_9) {
    function go(callback) {
        callback.call(this, 'Example Argument');
    }
    function callbackFunction(arg) {
        alert(arg);
    }
    go(callbackFunction);
})(Listing_5_9 || (Listing_5_9 = {}));
