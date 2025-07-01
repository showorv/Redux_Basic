export interface iTask{
    id: string,
    title: string,
    description: string,
    dueDate: string,
    isCompleted: boolean,
    priority: "high" | "medium" |"low"
}