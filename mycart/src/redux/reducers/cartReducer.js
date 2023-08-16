import actionType from "../actions/actionType";

const intialState = [];

const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      return [
        ...state,
        {
          ...action.payload.product,
          quantityInCart: action.payload.product.quantityInCart,
        },
      ];
    default:
      return state;
  }
};
export default cartReducer;
