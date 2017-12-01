// Declaration for the require function (Require JS)
declare function require(moduleNames: string[], onLoad: (...args: any[]) => void): void;

// Import - doesn't actually emit code
import { Ferry } from './Listing-2-007';

const condition = true;

if (condition) {
    // Only imports if the condition is true
    require(['./Listing-2-007'], (ferry: typeof Ferry) => {
        const myFerry = new ferry('', '', 0);
    });
}