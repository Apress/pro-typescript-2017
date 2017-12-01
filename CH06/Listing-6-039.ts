import { addEvent } from './Listing-6-011';

interface ProximityEvent {
    min: number;
    max: number;
    value: number;
    near: boolean;
}

const output = document.getElementById('content');

function sensorChange(proximity: ProximityEvent) {
    const distance =
        (proximity.value ? proximity.value + ' ' : '') +
        (proximity.near ? 'near' : 'far');

    output.innerHTML = distance;
}

// Near or far
addEvent(window, 'userproximity', sensorChange);

// Measurement within a range
addEvent(window, 'deviceproximity', sensorChange);