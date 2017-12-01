var scope = 1;
{
    var scope_1 = 2;
    // Inner: 2
    console.log('Inner: ' + scope_1);
}
// Outer: 1
console.log('Outer: ' + scope);
