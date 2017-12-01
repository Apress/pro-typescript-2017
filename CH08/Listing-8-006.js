var sensorChange = function (reading) {
    var proximity = reading.near
        ? 'Near'
        : 'Far';
    alert(proximity);
};
window.addEventListener('userproximity', sensorChange, true);
