export class FizzBuzz {
    generate(input: number): string | number {
        let output = '';

        if (input % 3 === 0) {
            output += 'Fizz';
        }

        if (input % 5 === 0) {
            output += 'Buzz';
        }

        return output === '' ? input : output;
    }
}