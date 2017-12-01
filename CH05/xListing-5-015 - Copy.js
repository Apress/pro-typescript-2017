var Listing_5_14;
(function (Listing_5_14) {
    class FictionalAPI {
        static getData(id, callback) {
            switch (id) {
                case 1:
                    callback({ id: 1, name: 'Aramis' });
                    break;
                case 2:
                    callback({ id: 2, name: 'Athos' });
                    break;
                case 3:
                    callback({ id: 3, name: 'Porthos' });
                    break;
                case 4:
                    callback({ id: 4, name: 'D\'Artagnan' });
                    break;
                default:
                    throw new Error('No matching record');
            }
        }
    }
    FictionalAPI.getData(1, (data) => {
        console.log(`${data.id} is ${data.name}`);
        FictionalAPI.getData(2, (data) => {
            if (data.name == 'Athos') {
                FictionalAPI.getData(3, (data) => {
                    console.log(data.name);
                    FictionalAPI.getData(4, (data) => {
                        console.log(data.name);
                    });
                });
            }
        });
    });
})(Listing_5_14 || (Listing_5_14 = {}));
