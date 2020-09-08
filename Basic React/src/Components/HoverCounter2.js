import React, { Component } from 'react'
import CountRender from './CountRender'

class HoverCounter2 extends Component {
    
    render() {
        const { count , incrementCount} = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}>Hovered {count} Times</h2>
            </div>
        )
    }
}

export default HoverCounter2
