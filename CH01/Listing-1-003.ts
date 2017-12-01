let globalScope = 1;

{
    let blockScope = 2;

    // OK. This is from a wider scope
    globalScope = 100;

    // Error! This is from a narrower scope
    nestedBlockScope = 300;

    {
        let nestedBlockScope = 3;

        // OK. This is from a wider scope
        globalScope = 1000;

        // OK. This is from a wider scope
        blockScope = 2000;
    }
}