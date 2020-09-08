import React,{useEffect,useRef} from 'react'

function FocusInput() {
    const inputref = useRef(null)
    useEffect(()=>{
        //Focus the Input
        inputref.current.focus()
    })
    return (
        <div>
            <input ref={inputref} type='text' />
        </div>
    )
}

export default FocusInput
