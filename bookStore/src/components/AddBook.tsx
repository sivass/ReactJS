import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/bookSlice';
import { Book } from '../models/Book';

const AddBook: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newBook: Book = {
            id: Date.now(), // Simple ID generation
            title,
            author,
        };
        dispatch(addBook(newBook));
        setTitle('');
        setAuthor('');
        setIsOpen(false); // Close the form after submission
    };

    return (
        <div>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add Book
            </button>

            {isOpen && (
                <div className="mt-4">
                    <form onSubmit={handleSubmit} className="border p-4 rounded">
                        <h2 className="text-lg font-bold mb-2">Add a New Book</h2>
                        <div className="mb-2">
                            <label className="block mb-1">Title:</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                className="border p-2 w-full"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block mb-1">Author:</label>
                            <input
                                type="text"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                required
                                className="border p-2 w-full"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AddBook;
