{
    // Number literal type
    type Fibonacci = 1 | 2 | 3 | 5 | 8 | 13;

    let num: Fibonacci;

    // OK
    num = 8;

    // Error: Type '9' is not assignable to type 'Fibonacci'
    num = 9;

    // Hybrid union/literal type
    type Randoms = 'Text' | 10 | false;

    let random: Randoms;

    // OK
    random = 'Text';
    random = 10;
    random = false;

    // Error: Not assignable.
    random = 'Other String';
    random = 12;
    random = true;
}