namespace Listing_5_14 {
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

        static getData(id: number, callback: (data: FictitiousData) => void) {
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

// Single call: 'Aramis'
FictitiousAPI.getData(1, function (data) {
    console.log(data.name);
});

// Error handling (doesn't work)
try {
    FictitiousAPI.getData(5, function (data) {
        console.log(data.name);
    })
} catch (ex) {
    console.log('This statement is not reached, the error is not caught!');
}

    /*
==== OUTPUT ====
Aramis
2 Athos
Porthos
D'Artagnan
Error: No matching record
    */

FictitiousAPI.getData(1, (data) => {
    console.log(data.name);

    FictitiousAPI.getData(2, (data) => {

        if (data.name == 'Athos') {
            console.log(data.id + ' ' + data.name);
        } else {
            console.log(data.name);
        }

        FictitiousAPI.getData(3, (data) => {
            console.log(data.name);

            FictitiousAPI.getData(4, (data) => {
                console.log(data.name);

                FictitiousAPI.getData(5, (data) => {
                    console.log(data.name);
                })
            });
        });
    });
});
}