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

    static getData(id: number) {
        return new Promise((fulfil: (data: FictitiousData) => void, reject: (reason: string) => void) => {
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

// Single call: 'Aramis'
FictitiousAPI.getData(1)
    .then(function (data) {
        console.log(data.name);
    });

// Error handling (works)
FictitiousAPI.getData(5)
    .then(function (data) {
        console.log(data.name);
    })
    .catch(function (error) {
        console.log('Caught ' + error);
    })

/*
==== OUTPUT ====
1 is Aramis
2
Porthos
D'Artagnan
Handled Error: No matching record
*/

FictitiousAPI.getData(1)
    .then((data) => {
        console.log(data.name);
        return FictitiousAPI.getData(2);
    })
    .then((data) => {
        if (data.name == 'Athos') {
            console.log(data.id + ' ' + data.name);
        } else {
            console.log(data.name);
        }

        return FictitiousAPI.getData(3);
    })
    .then((data) => {
        console.log(data.name);
        return FictitiousAPI.getData(4);
    })
    .then((data) => {
        console.log(data.name);
        return FictitiousAPI.getData(5);
    })
    .catch((error) => {
        console.log('Caught ' + error);
    });
