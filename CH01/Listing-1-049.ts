{
    const triangles = [1, 3, 6];

    // Destructuring past available values
    const [first, second, third = -1, fourth = -1] = triangles;

    // 6
    console.log(third);

    // -1
    console.log(fourth);
}