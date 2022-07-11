import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { selectAllBooks, bookRemoved } from './books';

const bookList = () => {
  const books = useSelector(selectAllBooks);
  const dispatch = useDispatch();

  const removeBook = (id) => {
    if (id) {
      dispatch(bookRemoved(id));
    }
  };

  const renderBook = books.map((book) => (
    <div key={book.id}>
      <ul>
        <li>
          {book.title}
          by
          {book.author}
          <button type="button" onClick={() => removeBook(book.id)}>
            Remove
          </button>
        </li>
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>books</h1>
      {renderBook}
    </div>
  );
};

export default bookList;
