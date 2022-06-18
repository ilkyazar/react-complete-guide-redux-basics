import { createSlice, configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter-slice';
import authSlice from './auth-slice';

// In case of multiple reducers, they can be merged in configureStore
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

// It has the unique identifiers, we don't need to
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
