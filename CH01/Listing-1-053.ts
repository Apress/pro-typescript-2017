{
    function add(a: number, b: number, c: number) {
        return a + b + c;
    }

    const hexagons = [1, 6, 15];

    // Spread operator in function call
    const result = add(...hexagons);

    // 22
    console.log(result);
}