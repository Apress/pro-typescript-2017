var Listing_5_14;
(function (Listing_5_14) {
    class FictionalAPI {
        static getData(id, callback) {
            // Simulating async data access with a timeout
            window.setTimeout(() => {
                const result = this.data[id];
                if (typeof result == 'undefined') {
                    throw new Error('No matching record');
                }
                callback(result);
            }, 200);
        }
    }
    FictionalAPI.data = {
        1: { id: 1, name: 'Aramis' },
        2: { id: 2, name: 'Athos' },
        3: { id: 3, name: 'Porthos' },
        4: { id: 4, name: 'D\'Artagnan' }
    };
    // Single call: 'Aramis'
    FictionalAPI.getData(1, function (data) {
        console.log(`${data.id} is ${data.name}`);
    });
    // Error handling (doesn't work)
    try {
        FictionalAPI.getData(5, function (data) {
            console.log(data.name);
        });
    }
    catch (ex) {
        console.log('This statement is not reached, the error is not caught!');
    }
    /*
    ==== OUTPUT ====
    1 is Aramis
    2
    Porthos
    D'Artagnan
    Error: No matching record
    */
    FictionalAPI.getData(1, (data) => {
        console.log(`${data.id} is ${data.name}`);
        FictionalAPI.getData(2, (data) => {
            if (data.name == 'Athos') {
                console.log(data.id);
            }
            FictionalAPI.getData(3, (data) => {
                console.log(data.name);
                FictionalAPI.getData(4, (data) => {
                    console.log(data.name);
                    FictionalAPI.getData(5, (data) => {
                        console.log(data.name);
                    });
                });
            });
        });
    });
})(Listing_5_14 || (Listing_5_14 = {}));
