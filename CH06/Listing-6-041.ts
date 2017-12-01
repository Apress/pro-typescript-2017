import { addEvent } from './Listing-6-011';

const output = document.getElementById('content');

function sensorChange(event: DeviceMotionEvent) {
    var motion = event.acceleration;
    var rotation = event.rotationRate;

    output.innerHTML = '<p>Motion :<br />' +
        motion.x + '<br />' +
        motion.y + '<br />' +
        motion.z + '</p>' +
        '<p>Rotation:<br />' +
        rotation.alpha + '<br />' +
        rotation.beta + '<br />' +
        rotation.gamma + '</p>';
}

addEvent(window, 'devicemotion', sensorChange);