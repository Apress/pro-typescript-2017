var Listing_5_30;
(function (Listing_5_30) {
    class ClickLogger {
        constructor() {
            document.addEventListener('click', this.eventListener);
        }
        eventListener(e) {
            // 3 (Bubbling Phase)
            const phase = e.eventPhase;
            const tag = e.target.tagName;
            console.log(`Click event in phase ${phase} detected on element ${tag} by ClickLogger.`);
        }
    }
    const clickLogger = new ClickLogger();
})(Listing_5_30 || (Listing_5_30 = {}));
