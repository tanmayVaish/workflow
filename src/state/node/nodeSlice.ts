import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Node } from "reactflow"

  const initialState: Node[] = []

const nodeSlice = createSlice({
    name: 'node',
    initialState,
    reducers: {
        addNode: (state, action: PayloadAction<Node>) => {
            state.push(action.payload)
        }
    }
})

export const { addNode } = nodeSlice.actions
export default nodeSlice.reducer