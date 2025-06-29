import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    count: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment: (state)=>{ // here state get all the values of the state and action add the other constraints
            state.count += 1
        },
        decrement: (state)=>{
            state.count -= 1
        }
    }
})

export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer;