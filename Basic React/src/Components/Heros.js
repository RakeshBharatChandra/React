import React from 'react'

function Heros({heroname}) {
    if(heroname=='Thanos'){
        console.error('Not a Hero');
    }
    else{
        return (
            <div>
                {heroname}
            </div>
        )
    }
}

export default Heros
