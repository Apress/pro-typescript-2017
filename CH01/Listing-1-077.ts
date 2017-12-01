class ClickCounter {
    private count = 0;

    registerClick() {
        this.count++;
        alert(this.count);
    }
}

const clickCounter = new ClickCounter();

document.getElementById('target').onclick = clickCounter.registerClick;
