import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./feature/counter/counterSlice"
// import logger from "./middleware/logger";
import taskReducer from "./feature/task/taskSlice"
export const store = configureStore({
    reducer: {
        // counter: counterReducer
        tasks: taskReducer
    },
    // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger) 
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch