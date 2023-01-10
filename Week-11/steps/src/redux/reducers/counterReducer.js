const initialState = {
    count: 0,
  };
  
  export const counterReducer = (state = initialState, action) => {  
    switch (action.type) {
      case 'INCREMENT':
        return {
          ...state,
          count: state.count + action.payload
        };
    }
    switch (action.type) {
      case 'DECREMENT':
        return {
          ...state,
          count: 0
        };
      default:
        return state;
    }
  };