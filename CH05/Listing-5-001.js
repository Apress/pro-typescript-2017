var Listing_5_1;
(function (Listing_5_1) {
    function test() {
        const testStart = performance.now();
        window.setTimeout(function () {
            console.log(performance.now() - testStart);
        }, 50);
    }
    test();
})(Listing_5_1 || (Listing_5_1 = {}));
