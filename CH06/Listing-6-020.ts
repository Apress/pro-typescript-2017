import { addEvent } from './Listing-6-011';

const storageKey = 'Example';

localStorage.setItem(storageKey, 'Stored value ' + Date.now());

addEvent(window, 'storage', (event: StorageEvent) => {
    console.log(`${event.key} "${event.oldValue}" changed to "${event.newValue}"`);
});