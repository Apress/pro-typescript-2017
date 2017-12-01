// DomainId type definition
type DomainId<T extends string> = {
    type: T,
    value: number,
}

// CustomerId
type CustomerId = DomainId<'CustomerId'>;
const createCustomerId = (value: number): CustomerId => ({ type: 'CustomerId', value });

// Product Id
type ProductId = DomainId<'ProductId'>;
const createProductId = (value: number): ProductId => ({ type: 'ProductId', value });

// Example class
class Example {
    static avoidAccidentalEquivalence(id: CustomerId) {
        // Implementation
    }

    static useEquivalence(id: number) {
        // Implementation
    }
}

var customerId = createCustomerId(1);
var productId = createProductId(5);

// Allowed
Example.avoidAccidentalEquivalence(customerId);

// Errors 'Supplied parameters do not match signature of call target'
Example.avoidAccidentalEquivalence(productId);

// Allowed
Example.useEquivalence(customerId.value);

// Allowed
Example.useEquivalence(productId.value);