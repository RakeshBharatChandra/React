import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'
import WithCounter from './WithCounter'

 class HoverCounter extends Component {
    
    
    render() {
        const {count,incrementCount} = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}> {this.props.name} Hovered {count} times</h2>
            </div>
        )
    }
}

export default WithCounter(HoverCounter,5)
