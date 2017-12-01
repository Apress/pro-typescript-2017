namespace Listing_1_54 {
    function getAverage(a: number, b: number, c: number): string {
        const total = a + b + c;
        const average = total / 3;
        return 'The average is ' + average;
    }

    const result = getAverage(4, 3, 8); // 'The average is 5'
}