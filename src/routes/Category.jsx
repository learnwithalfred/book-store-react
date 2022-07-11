import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import { getStatus } from '../redux/categories/categories';

function Category() {
  const [appStatus, setAppStatus] = useState('');
  const curStatus = useSelector(getStatus);

  const loadStatus = () => {
    setAppStatus(appStatus === '' ? curStatus : '');
  };

  return (
    <>
      <Navbar />
      <div className="books-container">
        <button
          onClick={() => loadStatus()}
          type="button"
          className="btn btn-primary"
        >
          Check status
        </button>
        <h1 className="mx-4 my-4">{appStatus}</h1>
      </div>
    </>
  );
}

export default Category;
