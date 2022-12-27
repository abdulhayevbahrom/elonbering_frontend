import { ADD_TO_HEART } from "../action/actionTypes";

const addToHeart = (state = [], action) =>{
    switch(action.type){
        case ADD_TO_HEART:
                if(state.some(i=>i.id===action.payload.id)){
                    return state.filter(i=>i.id !== action.payload.id)
                }
                return state = [...state, action.payload];
        default:
            return state
    }
}

export default addToHeart