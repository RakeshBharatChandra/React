import React, { Component } from 'react'
import Input from '../Input'

export class FocusRefs extends Component {
    constructor(props) {
        super(props)
    
       this.focusRef=React.createRef()
    }
    
    focusTxt=()=>{
        this.focusRef.current.focusText()
    }

    render() {
        return (
            <div>
                <Input ref={this.focusRef} />
                <button onClick={this.focusTxt}>Focus Text</button>
                
            </div>
        )
    }
}

export default FocusRefs
