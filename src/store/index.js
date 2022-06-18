import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from './counter-slice';
import authSliceReducer from './auth-slice';

// In case of multiple reducers, they can be merged in configureStore
const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    auth: authSliceReducer,
  },
});

export default store;
