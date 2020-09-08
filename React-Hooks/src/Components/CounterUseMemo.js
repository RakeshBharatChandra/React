import React,{useState,useMemo} from 'react'

function CounterUseMemo() {
    const [counterOne,setCounterOne] = useState(0)
    const [counterTwo,setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }
    /*
        const isEven = () =>{
            let i=0
            while(i<2000000000) i++ 
            return counterOne %2 == 0
            //return counterTwo %2 == 0
        }
    */
    const isEven = useMemo(() => {
                    let i=0
                        while(i<2000000000) i++ 
                        return counterOne %2 == 0
                }, [counterOne])
    
    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count is {counterOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
            
                <button onClick={incrementTwo}>Count is {counterTwo}</button>
            </div>     
        </div>    
    )
}

export default CounterUseMemo
