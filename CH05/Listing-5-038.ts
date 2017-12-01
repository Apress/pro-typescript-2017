namespace Listing_5_38 {
    class Lemur {
        constructor(public name: string) {

        }
    }

    const lemur = new Lemur('Sloth Lemur');

    // new property
    lemur.isExtinct = true;

    // true
    console.log(lemur.isExtinct);
}