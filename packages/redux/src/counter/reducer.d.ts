import type { PayloadAction } from "@reduxjs/toolkit";
export interface CounterState {
    value: number;
}
export declare const counterSlice: import("@reduxjs/toolkit").Slice<CounterState, {
    increment: (state: Map<import("immer").Draft<K>, import("immer").Draft<V>>) => void;
    decrement: (state: Map<import("immer").Draft<K>, import("immer").Draft<V>>) => void;
    incrementByAmount: (state: Map<import("immer").Draft<K>, import("immer").Draft<V>>, action: PayloadAction<number>) => void;
}, "counter", "counter", import("@reduxjs/toolkit").SliceSelectors<CounterState>>;
export declare const increment: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"counter/increment">, decrement: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"counter/decrement">, incrementByAmount: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "counter/incrementByAmount">;
declare const _default: import("redux").Reducer<CounterState>;
export default _default;
//# sourceMappingURL=reducer.d.ts.map