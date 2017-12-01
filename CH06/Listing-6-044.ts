namespace Listing_6_044 {
    const worker = new Worker('/Listing-6-043.js');

    function workerMessageReceived(event) {
        const response = event.data;

        console.log(response.id, response.message);
    };

    worker.addEventListener('message', workerMessageReceived);
}