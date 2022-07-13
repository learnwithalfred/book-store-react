/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'FYlvcWEDlWEYN00KzCCr';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net';
export const URL = `${BASE_URL}/bookstoreApi/apps/${API_KEY}/books`;

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(URL);
  const newData = [];
  Object.keys(response.data).forEach((key) => {
    if (key) {
      newData.push({
        ...response.data[key][0],
        item_id: key,
      });
    }
  });

  return newData;
});

export const createBook = createAsyncThunk('books/addNewBook', async (data) => {
  await axios.post(URL, data);
  return data;
});

export const deleteBook = createAsyncThunk(
  'books/addDeleteBook',
  async (id) => {
    const postUrl = `${URL}/${id}`;
    await axios.delete(postUrl, id);
    return id;
  },
);

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  // add any code that don't require api request
  reducers: {},
  // add any action the require API request
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        if (action.payload) {
          const books = state.books.filter(
            (book) => book.item_id !== action.payload,
          );
          state.books = books;
        }
      });
  },
});

export const selectAllBooks = (state) => state.books.books;
export const getBooksStatus = (state) => state.books.status;
export const getBooksError = (state) => state.books.error;

export default bookSlice.reducer;
