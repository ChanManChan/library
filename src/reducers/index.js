import { combineReducers } from 'redux';
import booksReducer from './books';
import searchReducer from './search';
import cartReducer from './cart';
import checkoutReducer from './checkout';
import phaseReducer from './phase';

const rootReducer = combineReducers({
  books: booksReducer,
  search: searchReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  phase: phaseReducer,
});

export default rootReducer;
