import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/books';

import { selectAllCategories } from '../redux/categories/categories';
import './Add-book-form.css';

function AddBookForm() {
  const categories = useSelector(selectAllCategories);

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onAuthorChanged = (e) => setAuthor(e.target.value);

  const onSavePostClicked = () => {
    if (title && author) {
      dispatch(addBook({ title, author }));
      setTitle('');
      setAuthor('');
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
          value={title}
          onChange={onTitleChanged}
        />
        <select
          className="custom-select"
          id="inputGroupSelect04"
          required
          value={author}
          onChange={onAuthorChanged}
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
