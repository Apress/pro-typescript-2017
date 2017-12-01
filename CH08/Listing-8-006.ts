const sensorChange = function (reading) {
    const proximity = reading.near
        ? 'Near'
        : 'Far';

    alert(proximity);
}

window.addEventListener('userproximity', sensorChange, true);