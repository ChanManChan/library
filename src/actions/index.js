export const set_books = (books) => ({
  type: 'SET_BOOKS',
  payload: books,
});

export const set_search = (query) => ({
  type: 'SET_QUERY',
  payload: query,
});

export const set_cart_item = (item) => ({
  type: 'ADD_ITEM',
  payload: item,
});

export const record_checkout = (item) => ({
  type: 'RECORD_CHECKOUT',
  payload: item,
});

export const set_stage = (item) => ({
  type: 'SET_STAGE',
  payload: item,
});
