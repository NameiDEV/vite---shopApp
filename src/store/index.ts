import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";
import categoriesReducer from './categories/categories.slice';
import productsReducer from './products/products.slice';
import productReducer from './products/product.slice';
import cartReducer from './cart/cart.slice';
import orderReducer from './order/order.slice';

export const store = configureStore({
    reducer: { 
        user : userReducer,
        products : productsReducer,
        product : productReducer,
        cart : cartReducer,
        categories : categoriesReducer,
        order : orderReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
