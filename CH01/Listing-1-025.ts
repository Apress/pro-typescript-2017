interface House {
    bedrooms: number;
    bathrooms: number;
}

interface Mansion {
    bedrooms: number;
    bathrooms: number;
    butlers: number;
}

function getProperty() : House | Mansion {
    // ...
}

const property = getProperty();

// OK as the property is on both House and Mansion
const bedroomCount = property.bedrooms;

// Errors: Property 'butlers' does not exist on type 'House | Mansion'
const butlerCount = property.butlers;

// OK with type assertion
const workingButlerCount = (<Mansion>property).butlers;