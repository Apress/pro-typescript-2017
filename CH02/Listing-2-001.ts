namespace First {
    export class Example {
        log() {
            console.log('Logging from First.Example.log()');
        }
    }
}

namespace Second {
    export class Example {
        log() {
            console.log('Logging from Second.Example.log()');
        }
    }
}

const first = new First.Example();

// Logging from First.Example.log()
first.log();

const second = new Second.Example();

// Logging from Second.Example.log()
second.log();