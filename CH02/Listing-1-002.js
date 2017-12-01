var FirstLevel;
(function (FirstLevel) {
    var SecondLevel;
    (function (SecondLevel) {
        var Example = (function () {
            function Example() {
            }
            return Example;
        }());
        SecondLevel.Example = Example;
    })(SecondLevel = FirstLevel.SecondLevel || (FirstLevel.SecondLevel = {}));
})(FirstLevel || (FirstLevel = {}));
(function (FirstLevel) {
    var SecondLevel;
    (function (SecondLevel) {
        var ThirdLevel;
        (function (ThirdLevel) {
            var Example = (function () {
                function Example() {
                }
                return Example;
            }());
            ThirdLevel.Example = Example;
        })(ThirdLevel = SecondLevel.ThirdLevel || (SecondLevel.ThirdLevel = {}));
    })(SecondLevel = FirstLevel.SecondLevel || (FirstLevel.SecondLevel = {}));
})(FirstLevel || (FirstLevel = {}));
var nested = new FirstLevel.SecondLevel.Example();
var dotted = new FirstLevel.SecondLevel.ThirdLevel.Example();
