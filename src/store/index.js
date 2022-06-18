import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const INCREASE = 'increase';
export const TOGGLE = 'toggle';

const initialState = { counter: 0, showCounter: true };

createSlice({
  name: 'counter',
  initialState,
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
      state.counter = state.counter + action.amount;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === INCREASE) {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === DECREMENT) {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === TOGGLE) {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
