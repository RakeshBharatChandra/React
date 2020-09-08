import React, { Component } from 'react'
import WithCounter from './WithCounter'

 class ClickCounter extends Component {
    
    
    render() {
        const {count,incrementCount} = this.props
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default WithCounter(ClickCounter,1)
