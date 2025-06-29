
import './App.css'
import { decrement, increment } from './redux/feature/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hook'

const App = ()=>{


  const dispatch = useAppDispatch()

  const {count} = useAppSelector((state)=> state.counter);

  const handleIncrement = ()=>{
    dispatch(increment())
  }

  const handleDecrement = ()=>{
    dispatch(decrement())
  }
  return(
    <>

    <button onClick={handleIncrement}>Increment</button>
    <button>{count}</button>
    <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default App
