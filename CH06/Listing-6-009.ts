namespace Listing_6_009 {
    const element = <HTMLDivElement>document.querySelector('#content');

    // Create and add the first element
    const newElement1 = document.createElement('div');
    newElement1.textContent = 'Hello World';

    element.appendChild(newElement1);

    // Create and add the second element
    const newElement2 = document.createElement('div');
    newElement2.textContent = 'Greetings Earth';

    element.appendChild(newElement2);
}