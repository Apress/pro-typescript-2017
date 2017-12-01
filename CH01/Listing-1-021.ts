interface Cephalopod {
    hasInk: boolean;
    arms: number;
    tentacles: number;
}

interface CephalopodDictionary {
    [index: string]: Cephalopod;
}

let dictionary: CephalopodDictionary = {};

dictionary['octopus vulgaris'] = { hasInk: true, arms: 8, tentacles: 0 };
dictionary['loligo vulgaris'] = { hasInk: true, arms: 8, tentacles: 2 };

// Error. Not assignable to type 'Cephalopod'
dictionary[0] = { hasInk: true };

const octopus = dictionary['octopus vulgaris'];

// The common octopus has no tentacles...
console.log(octopus.tentacles);

// Remove item
delete dictionary['octopus vulgaris'];