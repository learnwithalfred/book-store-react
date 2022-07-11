import React from 'react';
import { useSelector } from 'react-redux';
import AddBookForm from '../components/Add-book-form';
import Book from '../components/Book';
import Navbar from '../components/Navbar';
import { selectAllBooks } from '../redux/books/books';

function Books() {
  const books = useSelector(selectAllBooks);
  const renderBooks = books.map((book) => (
    <Book
      key={book.id}
      title={book.title}
      author={book.author}
      percentage={90}
    />
  ));

  return (
    <>
      <Navbar />
      <div className="books-container">
        {renderBooks}
        <hr className="line-break" />
        <AddBookForm />
      </div>
    </>
  );
}

export default Books;
