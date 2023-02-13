import { ADD_TO_CART, REMOVE_FROM_CART, CLEARE_CART } from "../action/actionTypes";

const addToCart = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return state = action.payload;
        // break;
        case REMOVE_FROM_CART:
            return state = state.filter(i => i._id !== action.payload)
        // break
        case CLEARE_CART:
            return state = action.payload
        default:
            return state
    }
}

export default addToCart