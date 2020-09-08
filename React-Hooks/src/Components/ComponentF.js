import React,{useContext} from 'react'
//import { UserContext, CityContext } from '../App'
//import {CountContext} from '../App'

function ComponentF() {
   // const countContext = useContext(CountContext)
   {/*

        return (
        <div>
           Component F -&gt; {countContext.countState}
            <button onClick={()=> countContext.countDispatch('increment')}>Increment</button>
            <button onClick={()=> countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=> countContext.countDispatch('reset')}>reset</button>
        </div>
    )

    */}
    

     {/* 

        return (
            <div>
            
                        <UserContext.Consumer>
                {
                        user => {
                            return(
                                <CityContext.Consumer>
                                { 
                                    city =>{
                                    return <div>User Context Value {user} and City is {city}</div>
                                    }
                                    }
                                </CityContext.Consumer>
                            )
                        }
                            
                    }        
            </UserContext.Consumer>
            
            
            </div>     
        )
     */}
}

export default ComponentF
