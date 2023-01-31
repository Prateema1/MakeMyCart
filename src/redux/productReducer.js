import { createReducer } from "@reduxjs/toolkit";

export const productReducer = createReducer({
    products: []
},{
    ADD_PRODUCTS: (state, action) => {
        const productLists = action.payload;
            state.products = productLists;
        }
    }
);