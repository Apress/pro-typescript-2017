// Interface
interface PersonInterface {
    name: string;
    heightInCentimeters: number;
}

const sherlock: PersonInterface = {
    name: 'Bendict',
    heightInCentimeters: 183
}

// Type Alias
type PersonType = {
    name: string;
    heightInCentimeters: number;
};

const john: PersonType = {
    name: 'Martin',
    heightInCentimeters: 169
}