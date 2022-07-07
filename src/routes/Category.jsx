import React from 'react';
import Navbar from '../components/Navbar';

function Category() {
  return (
    <>
      <Navbar />
      <div className="books-container">
        <button type="button" className="btn btn-primary">
          Check status
        </button>
      </div>
    </>
  );
}

export default Category;
