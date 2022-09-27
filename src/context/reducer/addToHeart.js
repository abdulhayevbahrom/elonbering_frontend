import { ADD_TO_HEART } from "../action/actionTypes";

const addToHeart = (state = [], action) =>{
    switch(action.type){
        case ADD_TO_HEART:
            return state = action.payload
        default:
            return state
    }
}

export default addToHeart