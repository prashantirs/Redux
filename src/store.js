import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        // Add your reducers here
        prashantReducer: thisIsReducer,
    }
});

export default store;