import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import orderReducer from './orderSlice';

const store = configureStore({
    reducer:{
        users: userSlice,
        products: productReducer,
        cart: cartReducer,
        orders: orderReducer,
            
    }
})
export default store;