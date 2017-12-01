namespace Listing_5_18 {
    interface FictitiousData {
        id: number;
        name: string;
    }

    class FictitiousAPI {
        static data: { [index: number]: FictitiousData } = {
            1: { id: 1, name: 'Aramis' },
            2: { id: 2, name: 'Athos' },
            3: { id: 3, name: 'Porthos' },
            4: { id: 4, name: 'D\'Artagnan' }
        };

        static getData(id: number, callback: (error: string, data: FictitiousData) => void) {
            // Simulating async data access with a timeout
            window.setTimeout(() => {
                const result = this.data[id];

                if (typeof result == 'undefined') {
                    callback('No matching record', null);
                    return;
                }

                callback(null, result);
            }, 200);
        }
    }

    // Single call: 'Aramis'
    FictitiousAPI.getData(1, function (error, data) {
        if (error) {
            console.log('Caught ' + error);
            return;
        }

        console.log(data.name);
    });

    // Error handling
    FictitiousAPI.getData(5, function (error, data) {
        if (error) {
            console.log('Caught ' + error);
            return;
        }

        console.log(data.name);
    });

    /*
    ==== OUTPUT ====
    1 is Aramis
    2
    Porthos
    D'Artagnan
    Caught No matching record
    */

    FictitiousAPI.getData(1, (error, data) => {
        if (error) {
            console.log('Caught ' + error);
            return;
        }

        console.log(data.name);

        FictitiousAPI.getData(2, (error, data) => {
            if (error) {
                console.log('Caught ' + error);
                return;
            }

            if (data.name == 'Athos') {
                console.log(data.id + ' ' + data.name);
            } else {
                console.log(data.name);
            }

            FictitiousAPI.getData(3, (error, data) => {
                if (error) {
                    console.log('Caught ' + error);
                    return;
                }

                console.log(data.name);

                FictitiousAPI.getData(4, (error, data) => {
                    if (error) {
                        console.log('Caught ' + error);
                        return;
                    }

                    console.log(data.name);

                    FictitiousAPI.getData(5, (error, data) => {
                        if (error) {
                            console.log('Caught ' + error);
                            return;
                        }

                        console.log(data.name);
                    })
                });
            });
        });
    });
}