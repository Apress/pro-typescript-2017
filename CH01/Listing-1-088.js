var Personalization = (function () {
    function Personalization() {
    }
    Personalization.greet = function (obj) {
        return 'Hello ' + obj.name;
    };
    return Personalization;
}());
