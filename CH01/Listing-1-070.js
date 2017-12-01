// Implementation
var prepareDocument = function () {
    var doc = function (selector) {
        return document.getElementById(selector);
    };
    doc.notify = function (message) {
        alert(message);
    };
    return doc;
};
var $ = prepareDocument();
// Call $ as a function
var elem = $('myId');
// Use $ as an object
$.notify(elem.id);
