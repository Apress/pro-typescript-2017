interface DeviceMotionEvent {
    motionDescription: string;
}

// The existing DeviceMotionEvent has all of its existing properties
// plus our additional motionDescription property
function handleMotionEvent(e: DeviceMotionEvent) {
    var acceleration = e.acceleration;
    var description = e.motionDescription;
}