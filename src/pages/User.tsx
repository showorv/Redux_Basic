

import { AddUser } from "@/components/module/user/AddUser";

import UserCard from "@/components/module/user/UserCard";


import { userSelector } from "@/redux/feature/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook"


export const User = () => {

  // const tasks = useAppSelector((state)=> state.tasks.task)
  const users = useAppSelector(userSelector)

  const dispatch = useAppDispatch()
  
  return (
    <div className="mx-auto max-w-7xl px-20 mt-20">
      <div className="flex justify-between">

      <h2>Task</h2>

      
      <AddUser />
      </div>
    
      <div className="space-y-10 mt-5">
      {/* <TaskCard /> */}
      {
        users.map((user)=>
          (
            <UserCard  users={user} key={user.id}/>
          )
        )
      }
  
      </div>

    </div>

  )
}

