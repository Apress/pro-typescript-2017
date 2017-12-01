import { Product } from './Listing-6-021';
import { ProductDatabase } from './Listing-6-030';

const db = new ProductDatabase('ExampleDatabase', 1);

db.deleteProduct(4);