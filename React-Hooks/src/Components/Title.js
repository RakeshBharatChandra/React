import React from 'react'

function Title() {
    console.log('Rendering Title')
    return (
        <div>
            Use Call Back Hook
        </div>
    )
}

//export default Title
export default React.memo(Title)