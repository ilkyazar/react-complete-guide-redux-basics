import { createSlice } from '@reduxjs/toolkit';

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

// It has the unique identifiers, we don't need to
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
