import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { product, productWithQuantity } from "../api/products/types";
import { RootState } from "../store";
import { notify } from "../helpers";

export interface wishListState {
  products: productWithQuantity[];
}

const initialState: wishListState = {
  products: [],
};

export const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, { payload }:PayloadAction<product>) => {
      state.products.push({...payload, quantity:1});
      notify(`${payload.title} successfully added to your wishlist`)
    },
    removeFromWishList: (state, { payload }:PayloadAction<product>) => {
      state.products = state.products.filter(
        (product) => product.id !== payload.id
      );
    },
    incrementWishlistItemQuantity: (state, { payload }:PayloadAction<product>) => {
      const index = state.products.findIndex(product=>product.id == payload.id)
      const product = state.products[index]
      state.products[index] = {...payload, quantity:product.quantity + 1}
    },
    decrementWishlistItemQuantity: (state, { payload }:PayloadAction<product>) => {
      const index = state.products.findIndex(product=>product.id == payload.id)
      const product = state.products[index]
      state.products[index] = {...payload, quantity:product.quantity - 1}
    },
  },
});
  
// Action creators are generated for each case reducer function
export const { addToWishlist, removeFromWishList, decrementWishlistItemQuantity, incrementWishlistItemQuantity } = wishListSlice.actions;

export const selectWishListItems = (state: RootState) => state.wishlist;

export const productIsInWishList = createSelector([selectWishListItems, (state, id:number) => id], (wishlist, id) =>
wishlist.products.some(wishlistItem => wishlistItem.id == id)
  )  
   
export default wishListSlice.reducer;
