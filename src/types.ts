export interface iTask{
    id: string,
    title: string,
    description: string,
    dueDate: string,
    isCompleted: boolean,
    priority: "high" | "medium" |"low",
    assignTo: string | null
}

export interface iUser {
    id: string,
    name: string
}

// export type updateTask = {
//     id: string,
//     data: Partial<Omit<iTask, "id">>
// }