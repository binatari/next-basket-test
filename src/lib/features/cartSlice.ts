import { createSelector, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { product, productWithQuantity } from '../api/products/types'
import { RootState } from '../store';
import { notify } from '../helpers';

export interface cartState {
    products: productWithQuantity[];
}

const initialState: cartState = {
    products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }:PayloadAction<product>) => {
      //any item added to the cart starts with a quantity of 1
      state.products.push({...payload, quantity:1});
      notify(`${payload.title} successfully added to cart`)
    },
    removeFromCart: (state, { payload }:PayloadAction<product>) => {
      state.products = state.products.filter(
        (product) => product.id !== payload.id
      );
    },
    incrementCartItemQuantity: (state, { payload }:PayloadAction<product>) => {
      const index = state.products.findIndex(product=>product.id == payload.id)
      const product = state.products[index]
      state.products[index] = {...payload, quantity:product.quantity + 1}
    },
    decrementCartItemQuantity: (state, { payload }:PayloadAction<product>) => {
      const index = state.products.findIndex(product=>product.id == payload.id)
      const product = state.products[index]
      state.products[index] = {...payload, quantity:product.quantity - 1}
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, decrementCartItemQuantity, incrementCartItemQuantity } = cartSlice.actions
   
export const selectCartItems = (state: RootState) => state.cart;

export const productIsInCart = createSelector([selectCartItems, (state, id:number) => id], (cart, id) =>
    cart.products.some(cartItem => cartItem.id == id)
  )  
   
export default cartSlice.reducer