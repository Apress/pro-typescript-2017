namespace Currying {
    // Currying
    const multiply = (a: number) => (b: number) => a * b;

    // Pass both arguments in sequence: 30
    const numA = multiply(5)(6);

    // Pass just the first argument and re-use
    const orderOfMagnitude = multiply(10);

    // 10
    const deca = orderOfMagnitude(1);

    // 100
    const hecta = orderOfMagnitude(deca);

    // 1,000
    const kilo = orderOfMagnitude(hecta);
}