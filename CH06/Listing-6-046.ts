const worker = new Worker('/Listing-6-045.js');

function workerMessageReceived(event) {
    const response = event.data;

    console.log(response.id, response.message);
};

worker.addEventListener('message', workerMessageReceived);

worker.postMessage('Start');