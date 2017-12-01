namespace Listing_5_34 {
    NodeList.prototype.each = function (callback) {
        for (let node of this) {
            callback.call(node);
        }
    };

    const getParagraphText = function () {
        console.log(this.innerHTML);
    };

    const paragraphs = document.querySelectorAll('p');
    paragraphs.each(getParagraphText);
}