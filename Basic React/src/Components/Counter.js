import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Count:0 
        }
    }
    
    increment(){
      //  this.setState({
      //      Count: this.state.Count +1 
      //    },()=>{console.log('Call Back value',this.state.Count)}
      //  ) 
        this.setState((prevstate)=>({
            Count:prevstate.Count + 1
        }))
        console.log(this.state.Count)
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    
    render() {
        return (
            <div>
                <h1> Count - {this.state.Count} </h1>
                <button onClick= {()=>this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter
