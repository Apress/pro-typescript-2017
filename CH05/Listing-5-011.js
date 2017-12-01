var Listing_5_11;
(function (Listing_5_11) {
    function go(callback) {
        callback('Example Argument');
    }
    function callbackFunction(arg) {
        alert(arg);
    }
    go(callbackFunction);
})(Listing_5_11 || (Listing_5_11 = {}));
