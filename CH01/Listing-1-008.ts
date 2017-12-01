{
    // primitive type annotation
    const name: string = 'Steve';
    const heightInCentimeters: number = 182.88;
    const isActive: boolean = true;

    // array type annotation
    const names: string[] = ['James', 'Nick', 'Rebecca', 'Lily'];

    // function annotation with parameter type annotation and return type annotation
    let sayHello: (name: string) => string;


    // implementation of sayHello function
    sayHello = function (name) {
        return 'Hello ' + name;
    };

    // object type annotation
    let person: { name: string; heightInCentimeters: number; };

    // Implementation of a person object
    person = {
        name: 'Mark',
        heightInCentimeters: 183
    };
}
