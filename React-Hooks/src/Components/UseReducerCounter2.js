import React,{useReducer} from 'react'

const initialstate={
    firstcounter :0,
    secondcounter:10
}
const reducer = (state,action)=>{
    switch(action.type){
        case 'increment' :
            return {...state, firstcounter:state.firstcounter + 1}
        case 'decrement' :
            return {...state, firstcounter:state.firstcounter - 1}
        case 'increment 5' :
            return {...state, firstcounter:state.firstcounter + action.value}
        case 'decrement 5' :
            return {...state, firstcounter:state.firstcounter - action.value}
        case 'increment2nd' :
            return {...state, secondcounter:state.secondcounter + 1}
        case 'decrement2nd' :
            return {...state, secondcounter:state.secondcounter - 1}
        case 'reset' :
            return initialstate
        default :
            return state
    }
}

function UseReducerCounter2() {

   const [count, dispatch] = useReducer(reducer, initialstate)
    return (
        <div>
            <div>Count -&gt; {count.firstcounter}</div>
            <div>Count -&gt; {count.secondcounter}</div>
            <button onClick={()=>dispatch({type:'increment'}) }>Increment</button>
            <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
            <button onClick={()=>dispatch({type:'increment 5',value:5})} >Increment 5</button>
            <button onClick={()=>dispatch({type:'decrement 5',value:5})} >Decrement 5</button>
            <br/>
            <button onClick={()=>dispatch({type:'increment2nd'}) }>Increment SecondCounter</button>
            <button onClick={()=>dispatch({type:'decrement2nd'})}>Decrement SecondCounter</button>
            <br/>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}

export default UseReducerCounter2
