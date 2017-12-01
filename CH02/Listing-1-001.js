var First;
(function (First) {
    var Example = (function () {
        function Example() {
        }
        Example.prototype.log = function () {
            console.log('Logging from First.Example.log()');
        };
        return Example;
    }());
    First.Example = Example;
})(First || (First = {}));
var Second;
(function (Second) {
    var Example = (function () {
        function Example() {
        }
        Example.prototype.log = function () {
            console.log('Logging from Second.Example.log()');
        };
        return Example;
    }());
    Second.Example = Example;
})(Second || (Second = {}));
var first = new First.Example();
// Logging from First.Example.log()
first.log();
var second = new Second.Example();
// Logging from Second.Example.log()
second.log();
