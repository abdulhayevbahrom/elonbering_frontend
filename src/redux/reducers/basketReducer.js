import { BASKET, PRODUCT_REMOVE } from "../actions/actionTypes";

const initialState = {
  basketArray: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case BASKET:
      return {
        basketArray: [...state.basketArray, action.payload],
      };

    case PRODUCT_REMOVE:
        let index = [...state.basketArray].filter(
            (product) => product.id === action.id
          );
      return {
        basketArray: [
          ...state.basketArray.slice(0, index),
          ...state.basketArray.slice(index + 1),
        ],
      };
    default:
      return state;
  }
};

export default basketReducer;
