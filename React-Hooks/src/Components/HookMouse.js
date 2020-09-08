import React,{useState,useEffect} from 'react'

function HookMouse() {
    const[x,setX]=useState(0)
    const[y,setY]=useState(0)
    /*

        useEffect(() => {
            console.log(`Use Effect Called`)
            window.addEventListener('mousemove',logMousePosition)
        },[])
        const logMousePosition = e => {
            console.log(`Mouse Event`)
            setX(e.clientX)
            setY(e.clientY)
        }
    }
    */
   useEffect(() => {
    console.log(`Use Effect Called`)
    window.addEventListener('mousemove',logMousePosition)
        return() => {
            console.log(`Component Unmounting Code`)
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
    
    const logMousePosition = e => {
        console.log(`Mouse Event`)
        setX(e.clientX)
        setY(e.clientY)
    }
    
    return (
        <div>
            X - {x} Y - {y}
        </div>
    )
}

export default HookMouse
