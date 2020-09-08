import React from 'react'

function MemoComp({name}) {
    console.log('Render MemoComp')
    return (
        <div>
           <h1> {name} </h1>
        </div>
    )
}
export default React.memo (MemoComp) 
