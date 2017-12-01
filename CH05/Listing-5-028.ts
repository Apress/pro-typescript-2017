const request = new XMLHttpRequest();

request.onload = function () {
    if (request.status !== 200) {
        // Status code not likely to be usable, i.e. a redirect
        console.log('Status Code:', request.status);
        return;
    }

    const data = JSON.parse(request.responseText);
    console.log(data);
};

request.onerror = (error) => {
    // Network failure or status code is error
    console.log('Error making request: ', error);
};

request.open('get', './api/musketeers.json', true);
request.send();