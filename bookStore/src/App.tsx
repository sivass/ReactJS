import React from 'react';
import './App.css';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

const App: React.FC = () => {
    const isAuthorized = true; // Change this to false to test the single column layout

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Bookstore</h1>
            <div className={`grid ${isAuthorized ? 'grid-cols-2' : 'grid-cols-1'} gap-4`}>
                <div className="col-span-1">
                    <BookList />
                </div>
                {isAuthorized && (
                    <div className="col-span-1">
                        <AddBook />
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
