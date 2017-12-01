namespace Listing_5_39 {
    class Lemur {
        constructor(public name: string) {

        }
    }

    const lemur = new Lemur('Sloth Lemur');

    Object.seal(lemur);

    // new property
    lemur.isExtinct = true;

    // undefined
    console.log(lemur.isExtinct);
}