fetch('./api/musketeers.json')
    .then((response) => {
    if (response.status !== 200) {
        // Status code not likely to be usable, i.e. a redirect or an error
        console.log('Status Code:', response.status);
        return;
    }
    return response.json();
}).then((data) => {
    console.log(data);
})
    .catch((error) => {
    // i.e. network failure
    console.log('Error making request', error);
});
