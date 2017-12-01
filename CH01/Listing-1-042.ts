{
    const triangles = [1, 3, 6, 10, 15, 21];

    // Destructuring with a rest argument
    const [first, second, ...remaining] = triangles;

    // 1
    console.log(first);

    // 3
    console.log(second);

    // [6, 10, 15, 21]
    console.log(remaining);
}