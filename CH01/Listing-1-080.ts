const clickHandler = clickCounter.registerClick.bind(clickCounter);

document.getElementById('target').onclick = clickHandler;