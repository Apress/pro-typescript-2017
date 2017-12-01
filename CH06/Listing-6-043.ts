namespace Listing_6_043 {
    declare function postMessage(message: any): void;

    let id = 0;

    self.setInterval(() => {
        id++;
        var message = {
            'id': id,
            'message': 'Message sent at ' + Date.now()
        };

        postMessage(message);
    }, 1000);
}