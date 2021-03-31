import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

/**
 * Root Store of this application.
 */
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    /** Add new slice reducers below. */
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
