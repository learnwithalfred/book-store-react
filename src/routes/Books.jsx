import React from 'react';
import AddBookForm from '../components/Add-book-form';
import Book from '../components/Book';
import Navbar from '../components/Navbar';

function Books() {
  return (
    <>
      <Navbar />
      <div className="books-container">
        <Book />
        <Book />
        <Book />
        <Book />
        <hr className="line-break" />
        <AddBookForm />
      </div>
    </>
  );
}

export default Books;
