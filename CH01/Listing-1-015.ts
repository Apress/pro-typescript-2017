// Type annotation for a union type
let union: boolean | number;

// OK: number
union = 5;

// OK: boolean
union = true;

// Error: Type "string" is not assignable to type 'number | boolean'
union = 'string';

// Type alias for a union type
type StringOrError = string | Error;

// Type alias for union of many types
type SeriesOfTypes = string | number | boolean | Error;