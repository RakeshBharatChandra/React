import React from 'react'

function Column() {
    const items=[
            {
                id : 1 ,
                Name : 'Raki' ,
                Age : 19 ,
            },
            {
                id : 2 ,
                Name : 'lalli' ,
                Age : 23 ,
            },
            {
                id : 3 ,
                Name : 'Sony' ,
                Age : 15 ,
            }
    ]
    return (
        <React.Fragment>
               {/*
                    {
                        items.map(item=>(
                            <React.Fragment key={item.id}>
                             <h1>Raki</h1> 
                                <p>{item.Name}</p>
                             </React.Fragment>
                        ))
                    }
                 */} 
                 
            <td>Name</td>
            <td>Raki</td>
        </React.Fragment>    
    )
}

export default Column
