import { addEvent } from './Listing-6-011';
import { Product } from './Listing-6-021';
import { ProductDatabase } from './Listing-6-025';

const db = new ProductDatabase('ExampleDatabase', 1);

// Wait for entry in the productId input
addEvent(document.getElementById('productId'), 'keyup', function () {
    // Get the id entered by the user, convert to number
    const productId = +this.value;

    // Search the database with the id
    db.getProduct(productId, (product) => {
        document.getElementById('content').innerHTML = product ?
            `The result for product id: ${product.productId} is: ${product.name}` :
            'No result';
    });
});