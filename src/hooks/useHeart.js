export const AddToHeart=(item, dispatch, toast)=>{
   return (dispatch({ type: "ADD_TO_HEART", payload: item }) , toast.success("Sevimlilarga qo'shildi", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500
      }))
}

export const RemoveFromHeart=(item, dispatch, toast)=>{
    return (dispatch({ type: "ADD_TO_HEART", payload: item }) , toast.error("Sevimlilardan olindi", {
         position: toast.POSITION.TOP_CENTER,
         autoClose: 1500
       }))
 }


