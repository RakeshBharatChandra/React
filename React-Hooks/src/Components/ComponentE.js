import React,{useContext} from 'react'
import ComponentF from './ComponentF'
import {UserContext,CityContext} from '../App'


function ComponentE() {
    //const user = useContext(UserContext)
   // const city = useContext(CityContext)
    return (
        <div>
            
           {/** {user}-{city}
            <br/><br/>
             <ComponentF /> */} 
           <ComponentF />
        </div>
    )
}

export default ComponentE
