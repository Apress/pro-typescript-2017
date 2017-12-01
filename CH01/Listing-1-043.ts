{
    const triangles = [1, 3, 6, 10, 15, 21];

    // Skipping third item
    const [first, second, , fourth] = triangles;

    // 1
    console.log(first);

    // 3
    console.log(second);

    // [10]
    console.log(fourth);
}