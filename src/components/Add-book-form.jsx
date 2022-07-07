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
            className="form-control"
            aria-label="Text input with segmented dropdown button"
          />
          <select className="custom-select" id="inputGroupSelect04" required>
            <option selected>Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
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
