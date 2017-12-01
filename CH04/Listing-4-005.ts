declare class DataBase {
    static connect(credentials: string, articles: string[]): DataBase;
    movies: any;
}

namespace Listing_4_005 {
    class Movie {
        private db: DataBase;

        constructor(private title: string, private year: number) {
            this.db = DataBase.connect('user:pw@mydb', ['movies']);
        }

        getTitle() {
            return this.title + ' (' + this.year + ')';
        }

        save() {
            this.db.movies.save({ title: this.title, year: this.year });
        }
    }

    // Movie
    const movie = new Movie('The Internship', 2013);

    movie.save();
}