import type { RootState } from "@/redux/store";
import type { iTask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";



interface IinitialState{
    task:iTask []
}
const initialState: IinitialState = {
 task: [
    // {id: "ashad",
    // title: "hello",
    // description: "hasa",
    // dueDate: "2025-7",
    // isCompleted: false,
    // priority: "high"},

    // {id: "jadjas",
    // title: "hello",
    // description: "hasa",
    // dueDate: "2025-7",
    // isCompleted: false,
    // priority: "low"},
 ] 
}

type drafTask = Pick<iTask, "description" | "priority" | "title" | "dueDate">

const createTask = (add: drafTask): iTask=>{
    return{ id: nanoid(), isCompleted: false, ...add}
}
const taskSlice = createSlice(
    {
        name: "task",
        initialState,
        reducers:{
            addTask: (state,action: PayloadAction<iTask>)=>{

                // const id = uuidv4()

                // const taskData = {
                //     ...action.payload,
                //     id,
                //     isCompleted: false
                // }

                const taskData = createTask(action.payload)
                state.task.push(taskData)
            },

            toggleComplete: (state, action: PayloadAction<string>)=>{
                console.log(action);
                
                state.task.forEach((task)=>{
                    task.id === action.payload ? (task.isCompleted = !task.isCompleted) : task;
                })
            },
            deleteTask: (state,action:PayloadAction<string>)=>{
                state.task = state.task.filter((task)=> task.id !== action.payload)
            }
        }
    }
)

export const taskSelector = (state: RootState)=>{
    return state.tasks.task
}

export const {addTask,  toggleComplete, deleteTask} = taskSlice.actions

export default taskSlice.reducer;