export const addEvent: (elem: any, eventName: string, callback: Function) => void = (function () {
    if (document.addEventListener) {
        // Handles modern browsers
        return function (elem, eventName, callback) {
            if (elem && elem.addEventListener) {
                // Handles a single element
                elem.addEventListener(eventName, callback, false);
            } else if (elem && elem.length) {
                // Handles a collection of elements (recursively)
                for (let i = 0; i < elem.length; i++) {
                    addEvent(elem[i], eventName, callback);
                }
            }
        };
    } else {
        // Handles some old browsers
        return function (elem, eventName, callback) {
            if (elem && elem.attachEvent) {
                // Handles a single element
                elem.attachEvent('on' + eventName, function () {
                    return callback.call(elem, window.event);
                });
            } else if (elem && elem.length) {
                // Handles a collection of elements (recursively)
                for (let i = 0; i < elem.length; i++) {
                    addEvent(elem[i], eventName, callback);
                }
            }
        };
    }
})();