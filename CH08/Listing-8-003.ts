class ApplicationError implements Error {

    public name = 'ApplicationError';

    constructor(public message: string) {
        if (typeof console !== 'undefined') {
            console.log(`Creating ${this.name} "${message}"`);
        }
    }

    toString() {
        return `${this.name}: {this.message}`;
    }
}

class InputError extends ApplicationError {
}

function errorsOnThree(input: number) {
    if (input === 3) {
        throw new InputError('Three is not allowed');
    }

    return input;
}