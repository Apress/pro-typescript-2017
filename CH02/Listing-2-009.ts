// Import a single export from a module
import { Ship } from './Listing-2-007';

export class Dock {
    private dockedShips: Ship[] = [];

    arrival(ship: Ship) {
        this.dockedShips.push(ship);
    }
}