import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import bookServiceInstance from "../services/BookService";
import { Book } from "../models/Book";



interface BookState {
    books: Book[];
}

const initialState: BookState = {
    books: bookServiceInstance.getBooks(),
};

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<Book>) => {
           bookServiceInstance.addBook(action.payload);
           state.books = [...state.books, action.payload];
        },
        removeBook: (state, action: PayloadAction<number>) => {
            bookServiceInstance.removeBook(action.payload);
            state.books = state.books.filter(book => book.id !== action.payload);
        },
    },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
