import { Button } from "@/components/ui/button"

import { removeUser } from "@/redux/feature/user/userSlice"
import { useAppDispatch } from "@/redux/hook"
import type {  iUser } from "@/types"
import { Trash2 } from "lucide-react"

interface iProp {
   users: iUser
}

export default function UserCard({users}: iProp){

    const dispatch = useAppDispatch()

    return(
    <div className="border px-5 py-4 rounded-md ">
        <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
                
                <h1 >{users.name}</h1>
            </div>
            <div className="flex gap-3 items-center">
                <Button onClick={()=> dispatch(removeUser(users.id))} variant="link" className="p-0 text-red-700">
                    <Trash2 />
                </Button>
                
            </div>
        </div>
       
    </div>
    )

}