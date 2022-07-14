import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';

function Category() {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <>
      <Navbar />
      <div className="books-container">
        <button type="button" className="btn btn-primary">
          Check status
        </button>
        <h1 className="my-4 display-1">{categories}</h1>
      </div>
    </>
  );
}

export default Category;
