{
    var triangles = [1, 3, 6, 10, 15, 21];
    // Destructuring with a rest argument
    var first = triangles[0], second = triangles[1], remaining = triangles.slice(2);
    // 1
    console.log(first);
    // 3
    console.log(second);
    // [6, 10, 15, 21]
    console.log(remaining);
}
