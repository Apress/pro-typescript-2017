namespace Docking {
    import Ship = Shipping.Ship;

    export class Dock {
        private dockedShips: Ship[] = [];

        arrival(ship: Ship) {
            this.dockedShips.push(ship);
        }
    }
}

const dock = new Docking.Dock();
