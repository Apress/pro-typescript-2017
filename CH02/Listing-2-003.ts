namespace Shipping {

    // Available as Shipping.Ship
    export interface Ship {
        name: string;
        port: string;
        displacement: number;
    }

    // Available as Shipping.Ferry
    export class Ferry implements Ship {
        constructor(
            public name: string,
            public port: string,
            public displacement: number) {
        }
    }

    // Only available inside of the Shipping module
    const defaultDisplacement = 4000;

    class PrivateShip implements Ship {
        constructor(
            public name: string,
            public port: string,
            public displacement: number = defaultDisplacement) {
        }
    }

}

const ferry = new Shipping.Ferry('Assurance', 'London', 3220);
