(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Performance = /** @class */ (function () {
        function Performance(func, iterations) {
            this.func = func;
            this.iterations = iterations;
        }
        Performance.prototype.runTest = function () {
            if (!performance) {
                throw new Error('The performance.now() standard is not supported in this runtime.');
            }
            var errors = [];
            var testStart = performance.now();
            for (var i = 0; i < this.iterations; i++) {
                try {
                    this.func();
                }
                catch (err) {
                    // Limit the number of errors logged
                    if (errors.length < 10) {
                        errors.push(i);
                    }
                }
            }
            var testTime = performance.now() - testStart;
            return {
                errors: errors,
                totalRunTime: testTime,
                iterationAverageTime: (testTime / this.iterations)
            };
        };
        Performance.run = function (func, iterations) {
            if (iterations === void 0) { iterations = 10000; }
            var tester = new Performance(func, iterations);
            return tester.runTest();
        };
        return Performance;
    }());
    exports.Performance = Performance;
});
