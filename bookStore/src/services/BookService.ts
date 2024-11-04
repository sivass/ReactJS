import { Book } from "../models/Book";

class BookService {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books = [...this.books, book];
    }

    removeBook(id: number): void {
        this.books = this.books.filter(book => book.id !== id);
    }

    getBooks(): Book[] {
        return this.books;
    }
}
const bookServiceInstance = new BookService();
export default bookServiceInstance;
