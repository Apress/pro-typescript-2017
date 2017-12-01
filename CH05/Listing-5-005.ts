const scope = 1;

{
    const scope = 2;

    // Inner: 2
    console.log('Inner: ' + scope);
}

// Outer: 1
console.log('Outer: ' + scope);