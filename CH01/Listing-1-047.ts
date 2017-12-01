{
    const pets = { cat: 'Pickle', dog: 'Berkeley', hamster: 'Hammy' }

    // Object destructuring
    const { dog, ...others } = pets;

    // 'Berkeley'
    console.log(dog);

    //  Object { cat: 'Pickle', hamster: 'Hammy'}
    console.log(others);
}