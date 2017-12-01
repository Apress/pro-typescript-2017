namespace Listing_8_001 {
    function errorsOnThree(input: number) {
        if (input === 3) {
            throw new Error('Three is not allowed');
        }

        return input;
    }

    const result = errorsOnThree(3);
}