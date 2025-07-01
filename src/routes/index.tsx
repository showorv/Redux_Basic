import App from "@/App";
import { Task } from "@/pages/Task";
import { User } from "@/pages/User";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
{
    path: "/",
    Component: App,
    children: [
        {
            index: true, // index true korle eta default page ei dekhabe.path e jawa lagbe na
            // path: "tasks",
            Component: Task
        },
        {
          
            path: "tasks",
            Component: Task
        },
        {
            path: "users",
            Component: User
        }
    ]
}
])
