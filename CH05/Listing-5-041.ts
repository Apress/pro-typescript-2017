namespace Listing_5_41 {
    if (typeof document !== "undefined" && !("classList" in document.documentElement)) {
        const elementPrototype = (HTMLElement || Element).prototype;
        if (elementPrototype) {
            Object.defineProperty(elementPrototype, 'classList', {
                get: function () {
                    const list = this.className ? this.className.split(/\s+/) : [];
                    console.log('Polyfill: ' + list);
                }
            });
        }
    }

    const elem = document.getElementById('example');

    console.log(elem.classList);
}