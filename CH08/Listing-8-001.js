var Listing_8_001;
(function (Listing_8_001) {
    function errorsOnThree(input) {
        if (input === 3) {
            throw new Error('Three is not allowed');
        }
        return input;
    }
    var result = errorsOnThree(3);
})(Listing_8_001 || (Listing_8_001 = {}));
