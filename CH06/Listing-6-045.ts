declare function postMessage(message: any): void;

let id = 0;

function start() {
    self.setInterval(() => {
        id++;
        const message = {
            'id': id,
            'message': 'Message sent at ' + Date.now()
        };

        postMessage(message);
    }, 1000);
}

self.onmessage = (event) => {
    if (event.data === 'Start') {
        start();
    } else {
        console.log(event.data);
    }
}