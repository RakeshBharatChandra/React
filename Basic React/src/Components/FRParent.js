import React, { Component } from 'react'
import FRinput from './FRinput'

export class FRParent extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef=React.createRef()
    }
    clicked = () => {
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <FRinput ref={this.inputRef}/>
                <button onClick={this.clicked}>Focus Input </button>
            </div>
        )
    }
}

export default FRParent
