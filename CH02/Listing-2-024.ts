namespace Listing_2_024 {

    // Decorator Function
    function log(target: any, key: string, descriptor: any) {
        // square
        console.log(key);
    }

    class Calculator {
        // Using the decorator
        @log
        square(n: number) {
            return n * n;
        }
    }

}