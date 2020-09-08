import {useState} from 'react'

function useCounter(initialvalue,value) {
    const [count,setCount] = useState(initialvalue)
    const increment = () =>{
        setCount(prevCount=>prevCount+value)
    }
    const decrement = () =>{
        setCount(prevCount=>prevCount-value)
    }
    const reset = () =>{
        setCount(initialvalue)
    }
    return [count,increment,decrement,reset]
}

export default useCounter
