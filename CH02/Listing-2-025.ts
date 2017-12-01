namespace Listing_2_025 {

    function log(target: any, key: string, descriptor: any) {
        const original = descriptor.value;

        descriptor.value = function (...args: any[]) {
            // Call the original method
            const result = original.apply(this, args);

            // Log the call, and the result
            console.log(`${key} with args ${JSON.stringify(args)} returned ${JSON.stringify(result)}`);

            // Return the result
            return result;
        }

        return descriptor;
    }

    class Calculator {
        // Using the decorator
        @log
        square(num: number) {
            return num * num;
        }
    }

    const calculator = new Calculator();

    // square with args [2] returned 4
    calculator.square(2);

    // square with args [3] returned 9
    calculator.square(3);

}