// Polyfill for CustomEvent:
// https://developer.mozilla.org/en/docs/Web/API/CustomEvent
(function () {
    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        const evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    ;
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
})();
var StandardEvent = CustomEvent;
// Code for custom events is below:
var EventType;
(function (EventType) {
    EventType[EventType["MyCustomEvent"] = 0] = "MyCustomEvent";
})(EventType || (EventType = {}));
class Trigger {
    static customEvent(name, detail) {
        const event = new StandardEvent(name, detail);
        document.dispatchEvent(event);
    }
}
class ListeningClass {
    constructor() {
        document.addEventListener(EventType[EventType.MyCustomEvent], this.eventListener, false);
    }
    eventListener(e) {
        console.log(EventType[EventType.MyCustomEvent] + ' detected by ClickLogger.');
        console.log('Information passed: ' + e.detail.example);
    }
}
var customLogger = new ListeningClass();
Trigger.customEvent(EventType[EventType.MyCustomEvent], {
    "detail": {
        "example": "Example Value"
    }
});
