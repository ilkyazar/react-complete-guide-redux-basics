import { createSlice, configureStore } from '@reduxjs/toolkit';

export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const INCREASE = 'increase';
export const TOGGLE = 'toggle';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      // We don't actually manipulating the state.
      // Redux uses imgur package,
      // which detect code like this
      // and automatically clone the existing state,
      // create a new state object,
      // keep all the state we're not editing
      // and overwrite the state we are editing
      // in an immutable way.
      // So, this is ok, here.
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// In case of multiple reducers, they can be merged in configureStore
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

// It has the unique identifiers, we don't need to
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
