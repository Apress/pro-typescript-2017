namespace Listing_1_56 {
    function concatenate(items: string[], separator = ',', beginAt = 0, endAt = items.length) {
        let result = '';

        for (let i = beginAt; i < endAt; i++) {
            result += items[i];
            if (i < (endAt - 1)) {
                result += separator;
            }
        }

        return result;
    }

    const items = ['A', 'B', 'C'];

    // 'A,B,C'
    const result = concatenate(items);

    // 'B-C'
    const partialResult = concatenate(items, '-', 1);
}
