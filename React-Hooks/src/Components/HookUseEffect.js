import React,{useState,useEffect} from 'react'

function HookUseEffect() {
    const [count,setCount] = useState(0)

    useEffect(()=>{
        document.title = `Clicked ${count} Times`
    })

    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Clicked {count} Times</button>
        </div>
    )
}

export default HookUseEffect
