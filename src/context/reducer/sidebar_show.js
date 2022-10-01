import { SIDEBAR_SHOW } from "../action/actionTypes";

const sidebarShow = (state = true, action)=>{
    switch(action.type){
        case SIDEBAR_SHOW:
            return state = action.payload
        
        default:
            return state
    }
}

export default sidebarShow