import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Books from './routes/Books';
import Category from './routes/Category';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/category" element={<Category />} />
    </Routes>
  </BrowserRouter>,
);
