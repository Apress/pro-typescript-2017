// Declaration for the require function (System JS)
declare const System: { import(module: string): Promise<any>; };

// Import - doesn't actually emit code
import { Ferry } from './Listing-2-007';

const condition = true;

if (condition) {
    // Only imports if the condition is true
    System.import('./Listing-2-007').then((ferry: typeof Ferry) => {
        const myFerry = new ferry('', '', 0);
    });
}