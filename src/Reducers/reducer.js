import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    c : 0,
};

const thisIsReducer = createReducer(initialState,{
    // action type is increment
    increment:(state) => {
                state.c += 1;
    },
});

export default thisIsReducer;