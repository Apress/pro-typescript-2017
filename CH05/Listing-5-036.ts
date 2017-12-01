interface NodeList {
    each(callback: (element: HTMLElement) => any): void;
}

interface NodeListOf<TNode extends Node> {
    each(callback: (element: TNode) => any): void;
}

NodeList.prototype.each = function (callback: (elem: HTMLElement) => any) {
    for (let node of this) {
        callback.call(node, node);
    }
};

const getParagraphText = function (elem: HTMLParagraphElement) {
    console.log(elem.innerHTML);
};

const paragraphs = document.querySelectorAll('p');
paragraphs.each(getParagraphText);