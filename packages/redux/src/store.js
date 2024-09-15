import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/reducer";
// const rootReducer = combineReducers({});
export var store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
