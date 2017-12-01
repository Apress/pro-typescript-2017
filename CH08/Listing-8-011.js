(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Listing-8-010"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Listing_8_010_1 = require("./Listing-8-010");
    var CommunicationLines = /** @class */ (function () {
        function CommunicationLines() {
        }
        CommunicationLines.prototype.calculate = function (teamSize) {
            return (teamSize * (teamSize - 1)) / 2;
        };
        return CommunicationLines;
    }());
    function testCommunicationLines() {
        var communicationLines = new CommunicationLines();
        var result = communicationLines.calculate(4);
        if (result !== 6) {
            throw new Error('Test failed for team size of 4.');
        }
        result = communicationLines.calculate(10);
        if (result !== 45) {
            throw new Error('Test failed for team size of 10.');
        }
    }
    var result = Listing_8_010_1.Performance.run(testCommunicationLines);
    console.log(result.totalRunTime + ' ms');
});
