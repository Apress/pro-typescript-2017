function addEventCrossBrowser(element, eventName, listener) {
    if (element.addEventListener) {
        element.addEventListener(eventName, listener, false);
    }
    else if (element.attachEvent) {
        element.attachEvent('on' + eventName, listener);
    }
}
class ClickLogger {
    constructor() {
        addEventCrossBrowser(document, 'click', this.eventListener);
    }
    eventListener(e) {
        // 3 (Bubbling Phase)
        const phase = e.eventPhase;
        const tag = e.target.tagName;
        console.log('Click event detected on element ' + tag + ' by ClickLogger.');
    }
}
const clickLogger = new ClickLogger();
