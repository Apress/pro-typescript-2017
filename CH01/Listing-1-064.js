var Currying;
(function (Currying) {
    // Currying
    var multiply = function (a) { return function (b) { return a * b; }; };
    // Pass both arguments in sequence: 30
    var numA = multiply(5)(6);
    // Pass just the first argument and re-use
    var orderOfMagnitude = multiply(10);
    // 10
    var deca = orderOfMagnitude(1);
    // 100
    var hecta = orderOfMagnitude(deca);
    // 1,000
    var kilo = orderOfMagnitude(hecta);
})(Currying || (Currying = {}));
