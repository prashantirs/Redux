//Reducer is a function that takes two objects,
//the first object  is initialstate and other object is an action,
// and returns a new state. 
// export const thisIsReducer = createReducer({},{});


import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    c : 0,
};

const thisIsReducer = createReducer(initialState,{});

export default thisIsReducer;