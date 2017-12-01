namespace Listing_5_30 {
    class ClickLogger {
        constructor() {
            document.addEventListener('click', this.eventListener);
        }

        eventListener(e: Event) {
            // 3 (Bubbling Phase)
            const phase = e.eventPhase;

            const tag = (<HTMLElement>e.target).tagName;

            console.log(`Click event in phase ${phase} detected on element ${tag} by ClickLogger.`);
        }
    }

    const clickLogger = new ClickLogger();
}