var Listing_1_55;
(function (Listing_1_55) {
    function getAverage(a, b, c) {
        var total = a;
        var count = 1;
        total += b;
        count++;
        if (typeof c !== 'undefined') {
            total += c;
            count++;
        }
        var average = total / count;
        return 'The average is ' + average;
    }
    // 'The average is 5'
    var result = getAverage(4, 6);
})(Listing_1_55 || (Listing_1_55 = {}));
