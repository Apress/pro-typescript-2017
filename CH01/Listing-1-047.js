var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
{
    var pets = { cat: 'Pickle', dog: 'Berkeley', hamster: 'Hammy' };
    // Object destructuring
    var dog = pets.dog, others = __rest(pets, ["dog"]);
    // 'Berkeley'
    console.log(dog);
    //  Object { cat: 'Pickle', hamster: 'Hammy'}
    console.log(others);
}
