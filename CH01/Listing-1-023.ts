interface Options {
    material: string;
    backlight: boolean;
}

// Mapped types
type ReadOnly<T> = { readonly [k in keyof T]: T[k]; }
type Optional<T> = {[k in keyof T]?: T[k]; }
type Nullable<T> = {[k in keyof T]: T[k] | null; }

// Creating new types from mapped types
type ReadonlyOptions = Readonly<Options>;
type OptionalOptions = Optional<Options>;
type NullableOptions = Nullable<Options>;