class Publisher {
    constructor() {
        this.subscribers = [];
    }
    addSubscriber(subscriber) {
        this.subscribers.push(subscriber);
    }
    notify(message) {
        for (let subscriber of this.subscribers) {
            subscriber(message);
        }
    }
}
const publisher = new Publisher();
// Using an arrow function
publisher.addSubscriber((message) => console.log('A: ' + message));
// Using an inline function
publisher.addSubscriber(function (message) {
    console.log('B: ' + message);
});
// A: Test message
// B: Test message
publisher.notify('Test message');
