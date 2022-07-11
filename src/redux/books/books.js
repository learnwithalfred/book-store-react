import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '2',
    title: 'My Book of Bible Stories',
    author: 'jw.org',
  },
  { id: '657890', title: 'Your family can be happy', author: 'John Doe' },
];

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdded: (state, action) => {
      state.push(action.payload);
    },
    bookRemoved: (state, action) => {
      state.filter((data) => data.id !== action.payload);
    },
  },
});

export const { bookAdded, bookRemoved } = bookSlice.actions;
export const selectAllBooks = (state) => state.books;

export default bookSlice.reducer;
