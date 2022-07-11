import { nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '2',
    title: 'My Book of Bible Stories',
    author: 'jw.org',
  },
  { id: '657890', title: 'Your family can be happy', author: 'John Doe' },
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        {
          id: nanoid(),
          title: action.book.title,
          author: action.book.author,
        },
      ];
    case 'REMOVE_BOOK':
      return state.map((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

export const selectAllBooks = (state) => state.books;

export default booksReducer;
