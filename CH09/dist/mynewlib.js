///<reference path="myoldlib.js" />
var NewProcessor = /** @class */ (function () {
    function NewProcessor() {
    }
    NewProcessor.prototype.process = function (name) {
        return old_process(name);
    };
    return NewProcessor;
}());
