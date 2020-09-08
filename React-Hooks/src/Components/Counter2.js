import React,{useState} from 'react'
import useCounter from './useCounter'

function Counter2() {
     /*
    
        const [count,setCount] = useState(0)
        const increment = () =>{
            setCount(prevCount=>prevCount+1)
        }
        const decrement = () =>{
            setCount(prevCount=>prevCount-1)
        }
        const reset = () =>{
            setCount(0)
        }

  */  
    const [count,increment,decrement,reset] = useCounter(10,1)
    return (
        <div>
            Count - {count}
            <br/>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter2
