interface Vehicle {
    moveTo(x: number, y: number);
}

// Explicit interface implementation
class Car implements Vehicle {
    moveTo(x: number, y: number) {
        console.log('Driving to ' + x + ' ' + y);
    }
}

class SportsCar extends Car {

}

// Doesn't explicitly implement the Vehicle interface
class Airplane {
    moveTo(x: number, y: number) {
        console.log('Flying to ' + x + ' ' + y);
    }
}

class Satellite {
    moveTo(x: number) {
        console.log('Targeting ' + x);
    }
}

function navigate(vehicle: Vehicle) {
    vehicle.moveTo(59.9436499, 10.7167959);
}

const car = new SportsCar();
navigate(car);

const airplane = new Airplane();
navigate(airplane);

const satellite = new Satellite();
navigate(satellite);