import type { RootState } from "@/redux/store";
import type { iUser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface userInitial {

    users: iUser []
}

const initialState: userInitial = {
    users: []
}

type draftUser = Pick<iUser, "name">;

const createUser = (user: draftUser): iUser=>{
    return ({id: nanoid(), ...user})
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state,action: PayloadAction<iUser>)=>{
            const addUser = createUser(action.payload)
            state.users.push(addUser)
        },
        removeUser : (state,action: PayloadAction<string>)=>{
            state.users = state.users.filter((user)=> user.id !== action.payload)
        }
    }
})

export const userSelector = (state: RootState)=>{
    return state.users.users
}

export const {addUser, removeUser} = userSlice.actions

export default userSlice.reducer