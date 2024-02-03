import { createSelector, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { product } from '../api/products/types'
import { RootState } from '../store';

export interface cartState {
    products: product[];
}

const initialState: cartState = {
    products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }:PayloadAction<product>) => {
      state.products.push(payload);
    },
    removeFromCart: (state, { payload }:PayloadAction<product>) => {
      state.products = state.products.filter(
        (product) => product.id !== payload.id
      );
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions

export const selectCartItems = (state: RootState) => state.cart;

export const productIsInCart = createSelector([selectCartItems, (state, id:number) => id], (cart, id) =>
    cart.products.some(cartItem => cartItem.id == id)
  )  
   
export default cartSlice.reducer