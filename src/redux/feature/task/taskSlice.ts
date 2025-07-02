import type { RootState } from "@/redux/store";
import type { iTask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { removeUser } from "../user/userSlice";




interface IinitialState{
    task:iTask [],
    filter:"all" | "low" | "high" | "medium"
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
 ] ,
 filter: "all"
}

type drafTask = Pick<iTask, "description" | "priority" | "title" | "dueDate" | "assignTo">

const createTask = (add: drafTask): iTask=>{
    return{ ...add, id: nanoid(), isCompleted: false, assignTo: add.assignTo ? add.assignTo: null,}
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
            },
            // updateTasks: (state, action: PayloadAction<updateTask>)=>{
            //     const {id,data} = action.payload

            //     const task = state.task.find((task)=> task.id===id)
            //     if(task){
            //         Object.assign(task,data)
            //     }
            // }

            updateFilter : (state, action: PayloadAction<"all" |"high"| "medium" | "low">)=>{
                state.filter=action.payload 
            }
        },
        extraReducers: (builder)=>{
            builder.addCase(removeUser, (state,action)=>{
                state.task.forEach(task=> task.assignTo === action.payload ? (task.assignTo = null): task)
            })
        }
    }
)

export const taskSelector = (state: RootState)=>{

    const filter = state.tasks.filter

    if(filter === "low"){
        return state.tasks.task.filter((task)=> task.priority === "low")
    }else if( filter === "medium"){
        return state.tasks.task.filter((task)=> task.priority === "medium")
    }else if( filter === "high"){
        return state.tasks.task.filter((task)=> task.priority === "high")
    }else{

        return state.tasks.task
    }
}

export const {addTask,  toggleComplete, deleteTask, updateFilter} = taskSlice.actions

export default taskSlice.reducer;