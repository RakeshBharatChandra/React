import React from 'react'

 const Hello = () => {
    // return(
     //    <div>
    //         <h1>Hello Rakesh</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        {id : "hello",className : "Good" },
        React.createElement('h1',null,'Hii Raki'))
 }
 export default Hello 