import React from 'react';
import AddBookForm from './components/Add-book-form';
import Book from './components/Book';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Book />
      <Book />
      <AddBookForm />
    </div>
  );
}

export default App;
