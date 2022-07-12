import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBook } from '../redux/books/books';

import { selectAllCategories } from '../redux/categories/categories';
import './Add-book-form.css';

function AddBookForm() {
  const categories = useSelector(selectAllCategories);

  const dispatch = useDispatch();
  const initialState = {
    itemId: '',
    title: '',
    author: '',
    category: 'Education',
  };
  const [bookData, setBookData] = useState(initialState);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setBookData({ ...bookData, [name]: value });
  };

  const onSavePostClicked = () => {
    if (bookData.title && bookData.author) {
      const inputData = {
        item_id: nanoid(),
        title: bookData.title,
        author: bookData.author,
        category: bookData.category,
      };
      dispatch(createBook(inputData));
      setBookData(initialState);
    }
  };

  const renderCategories = categories.map((item) => (
    <option key={item.id} value={item.name}>
      {item.name}
    </option>
  ));

  return (
    <div className="add-book-form">
      <h2>Add New Book</h2>
      <div className="card-body add-form-container">
        <input
          required
          type="text"
          placeholder="Book title"
          className="form-control"
          aria-label="Text input with segmented dropdown button"
          value={bookData.title}
          onChange={handleInputChange}
          name="title"
        />
        <select
          className="custom-select"
          id="inputGroupSelect04"
          required
          value={bookData.author}
          onChange={handleInputChange}
          name="author"
        >
          <option value="">Author</option>
          {renderCategories}
        </select>
        <button
          type="submit"
          className="btn btn-primary submit-btn"
          onClick={onSavePostClicked}
        >
          Add Book
        </button>
      </div>
    </div>
  );
}

export default AddBookForm;
