// Read-only type
const options1: ReadonlyOptions = {
    backlight: true,
    material: 'plastic'
};

// Error. Property is read-only
options1.backlight = false;

// Optional type
const options2: OptionalOptions = {
    // All members are optional
};

// Nullable type
const options3: NullableOptions = {
    backlight: null,
    material: null
};