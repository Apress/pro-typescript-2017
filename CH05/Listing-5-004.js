var Listing_5_4;
(function (Listing_5_4) {
    var scope = 1;
    (function () {
        var scope = 2;
        // Inner: 2
        console.log('Inner: ' + scope);
    }());
    // Outer: 1
    console.log('Outer: ' + scope);
})(Listing_5_4 || (Listing_5_4 = {}));
