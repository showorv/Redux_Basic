
import { AddTask } from "@/components/module/task/AddTask";
import TaskCard from "@/components/module/task/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import { taskSelector, updateFilter } from "@/redux/feature/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import type { iTask } from "@/types";


export const Task = () => {

  // const tasks = useAppSelector((state)=> state.tasks.task)

  const {isLoading, isError, data} = useGetTasksQuery(undefined,{
    pollingInterval: 30000, // 30 sec por por req pathabe and data get kore show korbe
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    refetchOnFocus: true
  })
  console.log(data);
  

  const tasks = useAppSelector(taskSelector)

  const dispatch = useAppDispatch()
  if(isLoading){
    return <p>loading...</p>
  }
  
  return (
    <div className="mx-auto max-w-7xl px-20 mt-20">
      <div className="flex justify-between">

      <h2>Task</h2>

      <div className="flex justify-around gap-3">

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all" onClick={()=> dispatch(updateFilter("all"))} >All</TabsTrigger>
          <TabsTrigger value="low" onClick={()=> dispatch(updateFilter("low"))}>Low</TabsTrigger>
          <TabsTrigger value="medium" onClick={()=> dispatch(updateFilter("medium"))}>Medium</TabsTrigger>
          <TabsTrigger value="high" onClick={()=> dispatch(updateFilter("high"))}>High</TabsTrigger>
        </TabsList>
    
      </Tabs>
      <AddTask />
      </div> 
      </div>
      <div className="space-y-10 mt-5">
      {/* <TaskCard /> */}
      {
        !isLoading && data.tasks.map((task: iTask)=>
          (
            <TaskCard task= {task} key={task.id}/>
          )
        )
      }
  
      </div>

    </div>

  )
}
