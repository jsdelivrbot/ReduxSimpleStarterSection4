import { combineReducers } from 'redux';
import BooksReducer from './books';
import ActiveBook from './active_book';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
