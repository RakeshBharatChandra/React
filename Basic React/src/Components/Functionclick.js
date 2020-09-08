import React from 'react'

function Functionclick() {
        function clicklistener(){
            console.log('Clicked in Function')
        }
    return (
        <div>
            <button onClick= {clicklistener}>Click me </button>
        </div>
    )
}

export default Functionclick
