export class Performance {
    constructor(private func: Function, private iterations: number) {

    }

    private runTest() {
        if (!performance) {
            throw new Error('The performance.now() standard is not supported in this runtime.');
        }

        const errors: number[] = [];

        const testStart = performance.now();

        for (let i = 0; i < this.iterations; i++) {
            try {
                this.func();
            } catch (err) {
                // Limit the number of errors logged
                if (errors.length < 10) {
                    errors.push(i);
                }
            }
        }

        const testTime = performance.now() - testStart;

        return {
            errors: errors,
            totalRunTime: testTime,
            iterationAverageTime: (testTime / this.iterations)
        };
    }

    static run(func: Function, iterations = 10000) {
        const tester = new Performance(func, iterations);
        return tester.runTest();
    }
}