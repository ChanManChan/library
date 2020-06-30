const initialState = {
  phases: [
    { id: '' + Math.random() * 10, stage: 'Order placed' },
    { id: '' + Math.random() * 10, stage: 'Hardware delivery' },
    { id: '' + Math.random() * 10, stage: 'Order complete' },
  ],
  checked: [],
};

const phaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STAGE':
      return { ...state, checked: action.payload };
    default:
      return state;
  }
};

export default phaseReducer;
