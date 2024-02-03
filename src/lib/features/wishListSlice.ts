import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { product } from "../api/products/types";
import { RootState } from "../store";

export interface wishListState {
  products: product[];
}

const initialState: wishListState = {
  products: [],
};

export const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, { payload }:PayloadAction<product>) => {
      state.products.push(payload);
    },
    removeFromWishList: (state, { payload }:PayloadAction<product>) => {
      state.products = state.products.filter(
        (product) => product.id !== payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToWishlist, removeFromWishList } = wishListSlice.actions;

export const selectWishListItems = (state: RootState) => state.wishlist;

export const productIsInWishList = createSelector([selectWishListItems, (state, id:number) => id], (wishlist, id) =>
wishlist.products.some(wishlistItem => wishlistItem.id == id)
  )  
   
export default wishListSlice.reducer;
