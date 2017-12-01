var C1 = (function () {
    function C1() {
    }
    C1.prototype.show = function (hint) {
        return 1;
    };
    return C1;
}());
var C2 = (function () {
    function C2(name) {
        this.name = name;
    }
    C2.prototype.show = function (hint) {
        if (hint === void 0) { hint = 'default'; }
        return Math.floor(Math.random() * 10);
    };
    return C2;
}());
var C3 = (function () {
    function C3() {
    }
    C3.prototype.show = function () {
        return 'Dynamic';
    };
    return C3;
}());
var T4 = {
    name: '',
    show: function () {
        return 1;
    }
};
var c1 = new C1();
var c2 = new C2('A name');
var c3 = new C3();
// c1, c2, c3 and T4 are equivalent
var arr = [c1, c2, c3, T4];
for (var i = 0; i < arr.length; i++) {
    arr[i].show();
}
