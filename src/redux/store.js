import { configureStore }  from "@reduxjs/toolkit";
import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";

const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer
    }
})

export default store;