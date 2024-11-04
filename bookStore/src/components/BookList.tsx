import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import BookItem from "./BookItem";

const BookList: React.FC = () => {
  const books = useSelector((state: RootState) => state.books.books);

  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-2">Book List</h2>
      {books.length === 0 ? (
        <p>No books available.</p>
      ) : (
        books.map(book => (
          <BookItem key={book.id} book={book} />
        ))
      )}
    </div>
  );
};

export default BookList;
