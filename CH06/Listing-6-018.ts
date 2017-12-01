const storageKey = 'Example';

// null the first time, 'Stored value' each subsequent time
console.log(sessionStorage.getItem(storageKey));

sessionStorage.setItem(storageKey, 'Stored value');