namespace Listing_1_57 {
    function getAverage(...a: number[]): string {
        let total = 0;
        let count = 0;

        for (let i = 0; i < a.length; i++) {
            total += a[i];
            count++;
        }

        const average = total / count;
        return 'The average is ' + average;
    }

    // 'The average is 6'
    const result = getAverage(2, 4, 6, 8, 10);
}