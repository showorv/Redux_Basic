import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./feature/counter/counterSlice"
// import logger from "./middleware/logger";
import taskReducer from "./feature/task/taskSlice"
import userReducer from "./feature/user/userSlice"
import { baseApi } from "./api/baseApi";
export const store = configureStore({
    reducer: {
        // counter: counterReducer
        tasks: taskReducer,
        users: userReducer,

        [baseApi.reducerPath]: baseApi.reducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(baseApi.middleware) 
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch