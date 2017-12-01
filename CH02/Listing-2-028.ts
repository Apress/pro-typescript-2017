function log(target: any, key: string) {
    let value = target[key];

    // Replacement getter
    const getter = function () {
        console.log(`Getter for ${key} returned ${value}`);
        return value;
    };

    // Replacement setter
    const setter = function (newVal) {
        console.log(`Set ${key} to ${newVal}`);
        value = newVal;
    };

    // Replace the property
    if (delete this[key]) {
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}

class Calculator {
    @log
    public num: number;

    square() {
        return this.num * this.num;
    }
}

const calc = new Calculator();

// Set num to 4
calc.num = 4;

// Getter for num returned 4
// Getter for num returned 4
calc.square();