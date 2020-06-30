const initialState = {
  name: {
    f_name: '',
    l_name: '',
  },
  address: {
    street: '',
    city: '',
    state: '',
    zip: '',
  },
  items: [],
  order_number: '',
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RECORD_CHECKOUT':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export default checkoutReducer;
