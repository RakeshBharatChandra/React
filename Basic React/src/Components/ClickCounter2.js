import React, { Component } from 'react'
import CountRender from './CountRender'

class ClickCounter2 extends Component {
    
    
    render() {
        const {count,incrementCount} = this.props
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default ClickCounter2
