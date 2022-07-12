// import { configureStore } from '@reduxjs/toolkit';
// import bookReducer from './books/books';
// import categoryReducer from './categories/categories';

// const store = configureStore({
//   reducer: {
//     books: bookReducer,
//     categories: categoryReducer,
//   },
// });
// export default store;
import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoryReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
