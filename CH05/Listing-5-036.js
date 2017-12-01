NodeList.prototype.each = function (callback) {
    for (let node of this) {
        callback.call(node, node);
    }
};
const getParagraphText = function (elem) {
    console.log(elem.innerHTML);
};
const paragraphs = document.querySelectorAll('p');
paragraphs.each(getParagraphText);
