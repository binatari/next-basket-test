import { combineReducers } from 'redux'
import wishListReducer from "./features/wishListSlice";
import cartReducer from "./features/cartSlice";
import api from './api/api';

export const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer,
    wishlist: wishListReducer,
    cart: cartReducer,
})

