class C1 {
    name: string;

    show(hint?: string) {
        return 1;
    }
}

class C2 {
    constructor(public name: string) {

    }

    show(hint: string = 'default') {
        return Math.floor(Math.random() * 10);
    }
}

class C3 {
    name: string;

    show() {
        return <any>'Dynamic';
    }
}

var T4 = {
    name: '',
    show() {
        return 1;
    }
};

var c1 = new C1();
var c2 = new C2('A name');
var c3 = new C3();

// c1, c2, c3 and T4 are equivalent
var arr: C1[] = [c1, c2, c3, T4];

for (var i = 0; i < arr.length; i++) {
    arr[i].show();
}
