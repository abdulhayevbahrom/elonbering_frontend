import { combineReducers } from "redux";
import addToCart from "./addToCart";
import addToHeart from "./addToHeart"

const reducer = combineReducers({
    addToCart,
    addToHeart
})

export default reducer