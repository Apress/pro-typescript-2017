// Hybrid type
interface SimpleDocument {
    (selector: string): HTMLElement;
    notify(message: string): void;
}

// Implementation
const prepareDocument = function (): SimpleDocument {
    let doc = <SimpleDocument>function (selector: string) {
        return document.getElementById(selector);
    };

    doc.notify = function (message: string) {
        alert(message);
    }

    return doc;
}

const $ = prepareDocument();

// Call $ as a function
const elem = $('myId');

// Use $ as an object
$.notify(elem.id);