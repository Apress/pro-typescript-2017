{
    const name: string = 'Avenue Road';

    // Error: Type 'string' cannot be converted to type 'number'
    const bedroomCount: number = <number>name;

    // Works
    const workingBedroomCount: number = <number><any>name;
}