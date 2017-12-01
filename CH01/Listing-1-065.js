var FlexiCurrying;
(function (FlexiCurrying) {
    function multiply(a, b) {
        if (b === void 0) { b = null; }
        if (b === null) {
            return function (b) { return a * b; };
        }
        return a * b;
    }
    // Pass both arguments "normally": 30
    var numA = multiply(5, 6);
    // Pass just the first argument and re-use
    var orderOfMagnitude = multiply(10);
    // 10
    var deca = orderOfMagnitude(1);
    // 100
    var hecta = orderOfMagnitude(deca);
    // 1,000
    var kilo = orderOfMagnitude(hecta);
})(FlexiCurrying || (FlexiCurrying = {}));
