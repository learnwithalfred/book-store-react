import React from 'react';
import './Book.css';

function Book() {
  return (
    <div className="book-container">
      <div className="card-body">
        <div className="row">
          <div className="book-data col-6">a</div>
          <div className="book-progress col-3">b</div>
          <div className="book-chapter col-3">
            <span className="chapter-description">Current Chapter</span>
            <span className="Lesson-Panel">Chapter 17</span>
            <button type="button" className="btn btn-primary Update-progress">
              Update progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
