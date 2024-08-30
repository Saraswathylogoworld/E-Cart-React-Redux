import { createSlice } from "@reduxjs/toolkit"
import { act } from "react";

const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addtoWishList:(state,action)=>{
            state.push(action.payload)
        },
        //to remove
        removeFromwishlist:(state,action)=>{
            return state.filter(item=> item.id != action.payload)
        }
    }
})
export const {addtoWishList,removeFromwishlist}=wishlistSlice.actions;
// export const {removeFromwishlist}=wishlistSlice.actions;
export default wishlistSlice.reducer;