interface Point {
    // Properties
    x: number;
    y: number;
}

interface Passenger {
    // Properties
    name: string;
}

interface Vehicle {
    // Constructor
    new(): Vehicle;

    // Properties
    currentLocation: Point;

    // Methods
    travelTo(point: Point): void;
    addPassenger(passenger: Passenger): void;
    removePassenger(passenger: Passenger): void;
}

var z: NodeListOf<HTMLDivElement>;