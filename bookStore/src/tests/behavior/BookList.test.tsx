import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import bookReducer from '../../redux/bookSlice';
import BookList from "../../components/BookList";

const renderWithRedux = (component: React.ReactNode, { initialState, store }: { initialState?: any; store?: any } = {}) => {
    return {
        ...render(<Provider store={store || createStore(bookReducer, initialState)}>{component}</Provider>),
        store,
    };
};

describe("BookList", () => {
    it("renders a list of books", () => {
        renderWithRedux(<BookList />, {
            initialState: { books: [{ id: 1, title: '1984', author: 'George Orwell' }] },
        });

        expect(screen.getByText('1984')).toBeInTheDocument();
    });
});