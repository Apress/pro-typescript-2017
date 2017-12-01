namespace Listing_1_81 {
    class ClickCounter {
        private count = 0;

        registerClick(id: string) {
            this.count++;
            alert(this.count);
        }
    }

    const clickCounter = new ClickCounter();

    document.getElementById('target').onclick = (e) => {
        const target = <Element>e.target || e.srcElement;
        clickCounter.registerClick(target.id);
    };
}