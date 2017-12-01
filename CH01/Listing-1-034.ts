const truthyString = 'Truthy string';
let falseyString: string;

// False, it checks the string but inverts the truth
const invertedTest = !truthyString;

// True, the string is not undefined or empty
const truthyTest = !!truthyString;

// False, the string is empty
const falseyTest = !!falseyString;