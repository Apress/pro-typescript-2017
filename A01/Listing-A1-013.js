let promise = new Promise(function (resolve, reject) {
    window.setTimeout(function () {
        if (true) {
            resolve('Success');
        } else {
            reject('Failed');
        }
    }, 1000);
});

promise.then(function (message) {
    alert(message);
}).catch(function (error) {
    alert(error);
});