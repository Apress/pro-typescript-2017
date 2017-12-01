import * as Dependency from './module';

export class Example extends Dependency.BaseClass {
    exampleMethod(): number {
        return 5;
    }
}

// Comment
let example = new Example();

const val = example.exampleMethod();