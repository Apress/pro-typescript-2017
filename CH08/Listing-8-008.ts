namespace Listing_8_008 {
    const sensorChange = function (reading) {
        var proximity = reading.near ?
            'Near' : 'Far';
        alert(proximity);
    }

    const readProximity = function () {
        const sensor = new ProximitySensor();

        sensor.open()
            .then(() => {
                return sensor.read();
            })
            .then((reading) => {
                sensorChange(reading);
            })
            .finally(() => {
                sensor.close();
            });
    }

    window.setInterval(readProximity, 500);
}