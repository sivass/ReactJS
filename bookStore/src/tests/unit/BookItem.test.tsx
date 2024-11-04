import React from 'react';
import { render,screen } from '@testing-library/react';
import BookItem from '../../components/BookItem';

test('renders book item', () => {
    const book = { id: 1, title: '1984', author: 'George Orwell' };
    render(<BookItem book={book} />);

    expect(screen.getByText('1984')).toBeInTheDocument();
    expect(screen.getByText('George Orwell')).toBeInTheDocument();
});
