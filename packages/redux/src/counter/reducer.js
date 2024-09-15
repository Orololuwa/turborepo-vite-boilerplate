var _a;
import { createSlice } from "@reduxjs/toolkit";
// Define the initial state using that type
var initialState = {
    value: 0,
};
export var counterSlice = createSlice({
    name: "counter",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState: initialState,
    reducers: {
        increment: function (state) {
            state.value += 1;
        },
        decrement: function (state) {
            state.value -= 1;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: function (state, action) {
            state.value += action.payload;
        },
    },
});
export var increment = (_a = counterSlice.actions, _a.increment), decrement = _a.decrement, incrementByAmount = _a.incrementByAmount;
export default counterSlice.reducer;
