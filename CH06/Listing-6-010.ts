namespace Listing_6_010 {
    const element = <HTMLDivElement>document.querySelector('#content');

    const newElement2 = document.createElement('div');
    newElement2.textContent = 'Greetings Earth';

    element.insertBefore(newElement2, element.firstChild);
}