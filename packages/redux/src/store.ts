import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counter/reducer";

const rootReducer = combineReducers({
  counter: counterSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
