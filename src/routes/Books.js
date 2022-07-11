import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddBookForm from '../components/Add-book-form';
import Book from '../components/Book';
import Navbar from '../components/Navbar';
import { selectAllBooks, addBook } from '../redux/books/books';

function Books() {
  const dispatch = useDispatch();

  const onSavePostClicked = (title, author) => {
    if (title && author) {
      dispatch(addBook({ title, author }));
    }
  };

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
        <AddBookForm handleSaveBook={onSavePostClicked} />
      </div>
    </>
  );
}

export default Books;
