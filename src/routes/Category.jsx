import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/Navbar';
import { CheckStatus } from '../redux/categories/categories';

function Category() {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  const update = (event) => {
    event.preventDefault();

    dispatch(CheckStatus());
  };

  return (
    <>
      <Navbar />
      <div className="books-container">
        <button type="button" className="btn btn-primary" onClick={update}>
          Check status
        </button>
        <h1 className="my-4 display-1">{categories}</h1>
      </div>
    </>
  );
}

export default Category;
