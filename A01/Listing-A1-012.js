fetch('/Your/URL/').then(function (response) {
    // Response received
    if (response.status >= 200 && response.status < 300) {
        // We got a success status code
    }
}).catch(function (error) {
    // Request failed
});