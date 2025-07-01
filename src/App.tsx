
// import { decrement, increment } from './redux/feature/counter/counterSlice';
// import { useAppDispatch, useAppSelector } from './redux/hook.tsx'

import { Link, Outlet } from "react-router"
import { Button } from "./components/ui/button"
import { ModeToggle } from "./components/mode-toggle"

const App = ()=>{


  // const dispatch = useAppDispatch()

  // const {count} = useAppSelector((state)=> state.counter);

  // const handleIncrement = ()=>{
  //   dispatch(increment())
  // }

  // const handleDecrement = ()=>{
  //   dispatch(decrement())
  // }
  return(
    <>
  <h2>Welcome</h2>
  <Button>Click</Button>
    {/* <button onClick={handleIncrement}>Increment</button>
    <button>{count}</button>
    <button onClick={handleDecrement}>Decrement</button> */}
    <Button ><Link to="tasks">Task</Link></Button>
    <Button><Link to="users">User</Link></Button>

    <ModeToggle />

    <Outlet />
    </>
    
  )
}

export default App
