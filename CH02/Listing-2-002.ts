namespace FirstLevel {
    export namespace SecondLevel {
        export class Example {

        }
    }
}

namespace FirstLevel.SecondLevel.ThirdLevel {
    export class Example {

    }
}

const nested = new FirstLevel.SecondLevel.Example();

const dotted = new FirstLevel.SecondLevel.ThirdLevel.Example();