import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBookForm from '../components/Add-book-form';
import Book from '../components/Book';
import Navbar from '../components/Navbar';
import {
  fetchBooks,
  selectAllBooks,
  getBooksStatus,
  getBooksError,
} from '../redux/books/books';

function Books() {
  const dispatch = useDispatch();
  const books = useSelector(selectAllBooks);
  const bookStatus = useSelector(getBooksStatus);
  const error = useSelector(getBooksError);

  useEffect(() => {
    if (bookStatus === 'idle') {
      dispatch(fetchBooks());
    }
  }, [bookStatus, dispatch]);

  let booksContent = '';
  if (bookStatus === 'loading') {
    booksContent = <h2>Loading...</h2>;
  } else if (bookStatus === 'succeeded') {
    booksContent = books.map((book) => (
      <div key={book.item_id} className="container">
        <Book
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
          percentage={90}
        />
      </div>
    ));
  } else if (bookStatus === 'failed') {
    booksContent = <p>{error}</p>;
  }

  return (
    <>
      <Navbar />
      <div className="books-container">
        {booksContent}
        <hr className="line-break" />
        <AddBookForm />
      </div>
    </>
  );
}

export default Books;
