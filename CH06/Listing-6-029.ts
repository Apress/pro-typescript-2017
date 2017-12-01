import { Product } from './Listing-6-021';
import { ProductDatabase } from './Listing-6-028';

const db = new ProductDatabase('ExampleDatabase', 1);

const newProduct = new Product(4, 'Newly added product');

db.addProduct(newProduct);