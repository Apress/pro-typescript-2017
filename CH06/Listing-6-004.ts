namespace Listing_6_004 {
    // HTMLElement
    const a = document.getElementById('content');

    // Element
    const b = document.querySelector('#content');

    // HTMLDivElement (due to type assertion)
    const c = <HTMLDivElement>document.querySelector('#content');
}