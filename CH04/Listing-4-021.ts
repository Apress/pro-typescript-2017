class Actor implements Acts {
    act: () => void;
}

applyMixins(Actor, [Acts]);

class AllRounder implements Acts, Dances, Sings {
    act: () => void;
    dance: () => void;
    sing: () => void;
}

applyMixins(AllRounder, [Acts, Dances, Sings]);