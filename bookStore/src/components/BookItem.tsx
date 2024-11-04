import React from "react";
import { Book } from "../models/Book";

interface BookItemProps {
    book: Book;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
    return (
        <div className="border-b py-2">
            <h3 className="text-lg font-semibold">{book.title}</h3>
            <p className="text-gray-600">Author: {book.author}</p>
        </div>
    );
};

export default BookItem;
