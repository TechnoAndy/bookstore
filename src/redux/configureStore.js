import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bReducer from './books/books';
import cReducer from './categories/categories';

const reducer = combineReducers({
  bReducer,
  cReducer,
});

const store = configureStore({
  reducer,
});

export default store;
