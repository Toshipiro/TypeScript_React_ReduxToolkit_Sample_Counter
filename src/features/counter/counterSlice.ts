import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/** State in this slice. */
interface CounterState {
  /** Amount of counter. */
  value: number;
}

/** Initial state in this slice. */
const initialState: CounterState = {
  value: 0,
};

/**
 *  Counter slice which handles counter state.
 */
const counterSlice = createSlice({
  /** Slice name. */
  name: "counter",
  /** Initial state. */
  initialState,
  /** Action types. */
  reducers: {
    /** Add value to the amount in store. */
    incrementByAmount: (state: CounterState, action: PayloadAction<number>) => {
      state.value = state.value + action.payload;
    },
    /** Add new sction types below. */
  },
});

export const { incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
