namespace Listing_1_78 {
    class ClickCounter {
        private count = 0;

        registerClick = () => {
            this.count++;
            alert(this.count);
        }
    }
}