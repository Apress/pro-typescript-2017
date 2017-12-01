// Import using an alias
import { Ship as Boat } from './Listing-2-007';

export class Dock {
    private dockedShips: Boat[] = [];

    arrival(ship: Boat) {
        this.dockedShips.push(ship);
    }
}