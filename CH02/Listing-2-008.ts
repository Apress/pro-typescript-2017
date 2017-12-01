// Import entire module
import * as Shipping from './Listing-2-007';

export class Dock {
    private dockedShips: Shipping.Ship[] = [];

    arrival(ship: Shipping.Ship) {
        this.dockedShips.push(ship);
    }
}