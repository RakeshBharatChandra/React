import React from 'react'
import './Mystyle.css'

function StyleSheet(props) {
    const classname = props.primary ? 'primary' : ' '
    return (
        <div>
            <h1 className={` ${classname} txt-sz ` }>Style Sheet</h1>
        </div>
    )
}

export default StyleSheet
