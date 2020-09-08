import React,{useReducer} from 'react'

const initialstate=0
const reducer = (state,action)=>{
    switch(action){
        case 'increment' :
            return state + 1
        case 'decrement' :
            return state - 1
        case 'reset' :
            return initialstate
        default :
            return state
    }
}

function UseReducerCounter3() {

   const [count, dispatch] = useReducer(reducer, initialstate)
   const [count2, dispatch2] = useReducer(reducer, initialstate)
    return (
        <div>
            <div>Count -&gt; {count}</div>

            <button onClick={()=>dispatch('increment')}>increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        
            <div>Count -&gt; {count2}</div>

            <button onClick={()=>dispatch2('increment')}>increment</button>
            <button onClick={()=>dispatch2('decrement')}>Decrement</button>
            <button onClick={()=>dispatch2('reset')}>Reset</button>
        </div>
    )
}

export default UseReducerCounter3
