var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Listing_4_026;
(function (Listing_4_026) {
    function Sings(Base) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.sing = function () {
                alert('Singing');
            };
            return class_1;
        }(Base));
    }
    function Dances(Base) {
        return /** @class */ (function (_super) {
            __extends(class_2, _super);
            function class_2() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_2.prototype.dance = function () {
                alert('Dancing');
            };
            return class_2;
        }(Base));
    }
    function Acts(Base) {
        return /** @class */ (function (_super) {
            __extends(class_3, _super);
            function class_3() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_3.prototype.act = function () {
                alert('Acting');
            };
            return class_3;
        }(Base));
    }
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var Actor = Acts(Person);
    var AllRounder = Acts(Sings(Dances(Person)));
    var actor = new Actor('Alan');
    actor.act();
    var allRounder = new AllRounder('Gene');
    allRounder.act();
    allRounder.dance();
    allRounder.sing();
})(Listing_4_026 || (Listing_4_026 = {}));
