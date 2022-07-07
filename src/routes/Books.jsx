import React from 'react';
import AddBookForm from '../components/Add-book-form';
import Book from '../components/Book';
import Navbar from '../components/Navbar';

function Books() {
  return (
    <>
      <Navbar />
      <div className="books-container">
        <Book title="My first title" author="John doe" />
        <Book
          title="Learn Ruby on rails"
          author="George Stores"
          percentage={90}
        />
        <Book
          title="React made easy"
          author="Rebecca Blankson"
          percentage={80}
        />
        <hr className="line-break" />
        <AddBookForm />
      </div>
    </>
  );
}

export default Books;
