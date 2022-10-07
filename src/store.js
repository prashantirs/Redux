import {configureStore} from '@reduxjs/toolkit';
import thisIsReducer from './Reducers/reducer';

const store = configureStore({
    reducer: {
        // Add your reducers here
        prashantReducer: thisIsReducer,
    }
});

export default store;