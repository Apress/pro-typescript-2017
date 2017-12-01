namespace FlexiCurrying {
    function multiply(a: number): (b: number) => number;
    function multiply(a: number, b: number): number;
    function multiply(a: number, b: number = null) {
        if (b === null) {
            return (b: number) => a * b;
        }

        return a * b;
    }

    // Pass both arguments "normally": 30
    const numA = multiply(5, 6);

    // Pass just the first argument and re-use
    const orderOfMagnitude = multiply(10);

    // 10
    const deca = orderOfMagnitude(1);

    // 100
    const hecta = orderOfMagnitude(deca);

    // 1,000
    const kilo = orderOfMagnitude(hecta);
}