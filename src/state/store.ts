import { configureStore } from "@reduxjs/toolkit";
import nodeReducer from "./node/nodeSlice";

export const store = configureStore({
    reducer: {
        node: nodeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
