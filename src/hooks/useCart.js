export const AddToCart = (item, cart, dispatch, toast)=>{
    const index = cart.findIndex(i => i._id === item._id)
    return index < 0 ? dispatch({ type: "ADD_TO_CART", payload: [...cart, {...item, qty: 1}] }) 
                    : (dispatch({ type: "ADD_TO_CART", payload:cart.map((order,inx)=> index=== inx ? {...order, qty: order.qty + 1} : order)}),
                        toast.success("Savatga qo'shildi", {
                          position: toast.POSITION.TOP_CENTER,
                          autoClose: 1500
                        }))
}

export const MinusFromCart = (item,cart, dispatch)=>{
const index = cart.findIndex(i => i._id === item._id)
  return item.qty <=1 ? null :  dispatch({ type: "ADD_TO_CART", payload: cart.map((order,inx)=> index===inx ? {...order, qty:order.qty-1} : order)})
}