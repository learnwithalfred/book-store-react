import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '2',
    title: 'JOhn',
    author: 'mark',
  },
  { id: '657890', title: 'Ben', author: 'ken' },
];

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdded: (state, action) => {
      state.push(action.payload);
    },
    bookRemoved: (state, action) => {
      console.log(action.payload);
      state.filter((data) => data.id !== action.payload);
    },
  },
});

export const { bookAdded, bookRemoved } = bookSlice.actions;
export const selectAllBooks = (state) => state.books;

export default bookSlice.reducer;
