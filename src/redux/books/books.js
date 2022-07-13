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
  const response = await axios.post(URL, data);
  return response.data;
});

export const deleteBook = createAsyncThunk(
  'books/addDeleteBook',
  async (id) => {
    const response = await axios.post(`${URL}/id`, id);
    return response.data;
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
  reducers: {
    bookAdded: {
      reducer(state, action) {
        state.books.push(action.payload);
      },
    },
    postDeleted(state, action) {
      const { id } = action.payload;
      state.posts.filter((post) => post.id !== id);
    },
  },
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
      });
  },
});

export const selectAllBooks = (state) => state.books.books;
export const getBooksStatus = (state) => state.books.status;
export const getBooksError = (state) => state.books.error;

export const { bookAdded, postDeleted, booksFetched } = bookSlice.actions;

export default bookSlice.reducer;
