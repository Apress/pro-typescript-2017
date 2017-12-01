namespace Listing_2_027 {

    function log(target: any) {
        const original = target;

        // Wrap the constructor with a logging constructor
        const constr: any = (...args) => {
            console.log(`Creating new ${original.name}`);
            const c: any = () => {
                return original.apply(null, args);
            }
            c.prototype = original.prototype;

            return new c();
        }

        constr.prototype = original.prototype;

        return constr;
    }

    @log
    class Calculator {
        square(n: number) {
            return n * n;
        }
    }

    // Creating new Calculator
    var calc1 = new Calculator();

    // Creating new Calculator
    var calc2 = new Calculator();

}