import { Ajax } from './Listing-6-013';

var ajax = new Ajax();

// Making a GET request
ajax.httpGet('data.html')
    .then((request) => {
        document.getElementById('content').innerHTML = request.responseText;
    });