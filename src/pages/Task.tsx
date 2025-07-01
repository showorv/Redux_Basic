
import { AddTask } from "@/components/module/task/AddTask";
import TaskCard from "@/components/module/task/TaskCard";
import { taskSelector } from "@/redux/feature/task/taskSlice";
import { useAppSelector } from "@/redux/hook"


export const Task = () => {

  // const tasks = useAppSelector((state)=> state.tasks.task)
  const tasks = useAppSelector(taskSelector)
  console.log(tasks);
  
  return (
    <div className="mx-auto max-w-7xl px-20 mt-20">
      <div className="flex justify-between">

      <h2>Task</h2>
      <AddTask />
      </div>
      <div className="space-y-10 mt-5">
      {/* <TaskCard /> */}
      {
        tasks.map((task)=>
          (
            <TaskCard task= {task} key={task.id}/>
          )
        )
      }
  
      </div>

    </div>

  )
}
