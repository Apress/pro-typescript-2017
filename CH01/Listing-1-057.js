var Listing_1_57;
(function (Listing_1_57) {
    function getAverage() {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        var total = 0;
        var count = 0;
        for (var i = 0; i < a.length; i++) {
            total += a[i];
            count++;
        }
        var average = total / count;
        return 'The average is ' + average;
    }
    // 'The average is 6'
    var result = getAverage(2, 4, 6, 8, 10);
})(Listing_1_57 || (Listing_1_57 = {}));
