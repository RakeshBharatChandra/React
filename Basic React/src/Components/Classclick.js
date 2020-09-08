import React, { Component } from 'react'

class Classclick extends Component {
    clicked(){
        console.log('Clicked in class')
    }
    render() {
        return (
            <div>
                <button onClick={this.clicked}>Click here</button>
            </div>
        )
    }
}

export default Classclick
