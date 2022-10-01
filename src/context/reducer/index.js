import { combineReducers } from "redux";
import addToCart from "./addToCart";
import addToHeart from "./addToHeart"
import sidebarShow from "./sidebar_show";

const reducer = combineReducers({
    addToCart,
    addToHeart,
    sidebarShow
})

export default reducer