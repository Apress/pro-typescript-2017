if (!NodeList.prototype.each) {
    NodeList.prototype.each = function (callback: (elem: HTMLElement) => any) {
        for (let node of this) {
            callback.call(node, node);
        }
    };
}