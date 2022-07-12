import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBookForm from '../components/Add-book-form';
import Book from '../components/Book';
import Navbar from '../components/Navbar';
import { getBooks, deleteBook } from '../redux/books/books';

function Books() {
  const { books, loading } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  let fetchedBooks = '';
  if (loading) {
    fetchedBooks = <h2>Loading...</h2>;
  } else {
    fetchedBooks = books.map((book) => (
      <div key={book.item_id} className="container">
        <Book
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
          percentage={90}
          handleDelete={() => handleDelete(book.id)}
        />
      </div>
    ));
  }

  return (
    <>
      <Navbar />
      <div className="books-container">
        {fetchedBooks}
        <hr className="line-break" />
        <AddBookForm />
      </div>
    </>
  );
}

export default Books;
