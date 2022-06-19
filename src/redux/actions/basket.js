import {BASKET, PRODUCT_REMOVE} from './actionTypes'

export function sendBasket (basketvalue){
    return{
        type:BASKET,
        payload:basketvalue
    }
}


export const deleteProduct = (productid) => {
    return {
        type:PRODUCT_REMOVE,
        id: productid
    }
}