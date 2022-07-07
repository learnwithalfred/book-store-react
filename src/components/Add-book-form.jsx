import React from 'react';
import './Add-book-form.css';

function AddBookForm() {
  return (
    <div className="add-book-form">
      <h2>Add New Book</h2>
      <form action="/">
        <div className="card-body add-form-container">
          <input
            required
            type="text"
            placeholder="Book title"
            className="form-control"
            aria-label="Text input with segmented dropdown button"
          />
          <select className="custom-select" id="inputGroupSelect04" required>
            <option selected>Author</option>
            <option value="1">John Doe</option>
            <option value="2">Samuel Nip</option>
            <option value="3">Ken Brown</option>
          </select>
          <button type="submit" className="btn btn-primary submit-btn">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBookForm;
