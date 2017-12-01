if (!NodeList.prototype.each) {
    NodeList.prototype.each = function (callback) {
        for (let node of this) {
            callback.call(node, node);
        }
    };
}
