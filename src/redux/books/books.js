import BookService from './bookService';

export const ADD_BOOK = 'ADD_BOOK';
export const GET_BOOKS = 'GET_BOOKS';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const createBook = (data) => async (dispatch) => {
  try {
    const res = await BookService.addNewBook(data);
    dispatch({
      type: ADD_BOOK,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

const initialState = [
  {
    id: '2',
    title: 'My Book of Bible Stories',
    author: 'jw.org',
  },
  { id: '657890', title: 'Your family can be happy', author: 'John Doe' },
];

export const addBook = (book) => ({
  type: 'ADD_BOOK',
  book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload;
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

export const selectAllBooks = (state) => state.books;

export default booksReducer;
