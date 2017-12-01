import { addEvent } from './Listing-6-011';

const sensorApiName = 'devicetemperature';

const output = document.getElementById('content');

addEvent(window, sensorApiName, (data) => {
    output.innerHTML = sensorApiName + ' ' + data.value;
});