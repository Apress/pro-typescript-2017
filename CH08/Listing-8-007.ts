namespace Listing_8_007 {
    const sensorChange = function (reading) {
        var proximity = reading.near ?
            'Near' : 'Far';
        alert(proximity);
    }

    const readProximity = function () {
        const sensor = new ProximitySensor();
        try {
            sensor.open();

            const reading = sensor.read();

            sensorChange(reading);
        } finally {
            sensor.close();
        }
    }

    window.setInterval(readProximity, 500);
}