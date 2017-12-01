import * as express from 'express';
import * as mongoose from 'mongoose';
declare var next: (error: any) => void;

// MongoDB typically runs on port 27017
mongoose.connect('mongodb://localhost:27017/books', { useMongoClient: true });

// Defines a book
interface Book extends mongoose.Document {
    title: string;
    author: string;
    isbn: string;
}

// Defines the book database schema
const bookSchema = new mongoose.Schema({
    title: String, author: String, isbn: String
});

const Book = mongoose.model<Book>('Book', bookSchema);

/* GET /book */
export function list(request: express.Request, response: express.Response) {
    Book.find({})
        .then((res) => {
            response.render('book', { 'title': 'Books', 'books': res });
        })
        .catch((err) => {
            return next(err);
        });
};

/* POST /book */
export function submit(request: express.Request, response: express.Response) {
    const newBook = new Book({
        title: request.body.book_title,
        author: request.body.author,
        isbn: request.body.book_isbn
    });

    newBook.save()
        .then((res) => {
            response.redirect('/book');
        })
        .catch((err) => {
            return next(err);
        });
}