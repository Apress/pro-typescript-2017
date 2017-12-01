var Listing_1_50;
(function (Listing_1_50) {
    function concatenate(items, separator, beginAt, endAt) {
        if (separator === void 0) { separator = ','; }
        if (beginAt === void 0) { beginAt = 0; }
        if (endAt === void 0) { endAt = items.length; }
        var result = '';
        for (var i = beginAt; i < endAt; i++) {
            result += items[i];
            if (i < (endAt - 1)) {
                result += separator;
            }
        }
        return result;
    }
    var items = ['A', 'B', 'C'];
    // 'A,B,C'
    var result = concatenate(items);
    // 'B-C'
    var partialResult = concatenate(items, '-', 1);
})(Listing_1_50 || (Listing_1_50 = {}));
