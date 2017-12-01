var Listing_5_14;
(function (Listing_5_14) {
    class FictionalAPI {
        static getData(id) {
            return new Promise((fulfil, reject) => {
                // Simulating async data access with a timeout
                window.setTimeout(() => {
                    const result = this.data[id];
                    if (typeof result == 'undefined') {
                        reject('No matching record');
                    }
                    fulfil(result);
                }, 200);
            });
        }
    }
    FictionalAPI.data = {
        1: { id: 1, name: 'Aramis' },
        2: { id: 2, name: 'Athos' },
        3: { id: 3, name: 'Porthos' },
        4: { id: 4, name: 'D\'Artagnan' }
    };
    // Single Call
    FictionalAPI.getData(1)
        .then(function (data) {
        console.log(`${data.id} is ${data.name}`);
    });
    /*
    ==== OUTPUT ====
    1 is Aramis
    2
    Porthos
    D'Artagnan
    Handled Error: No matching record
    */
    FictionalAPI.getData(1)
        .then((data) => {
        console.log(`${data.id} is ${data.name}`);
        return FictionalAPI.getData(2);
    })
        .then((data) => {
        if (data.name == 'Athos') {
            console.log(data.id);
        }
        return FictionalAPI.getData(3);
    })
        .then((data) => {
        console.log(data.name);
        return FictionalAPI.getData(4);
    })
        .then((data) => {
        console.log(data.name);
        return FictionalAPI.getData(5);
    })
        .catch((error) => {
        console.log('Handled Error: ' + error);
    });
})(Listing_5_14 || (Listing_5_14 = {}));
