import { addEvent } from './Listing-6-011';

const output = document.getElementById('content');

function sensorChange(data: DeviceLightEvent) {
    output.innerHTML = 'Ambient light reading: ' + data.value;
}

addEvent(window, 'devicelight', sensorChange);