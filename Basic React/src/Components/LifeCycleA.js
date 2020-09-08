import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

 class LifeCycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name :'Raki'
         }
         console.log('LifeCycleA Constructor')
     }
    
     static getDerivedStateFromProps(props,state){
         console.log('LifeCycleA getDerivedStateFromProps')
         return null
     }
     
     componentDidMount(){
        console.log('LifeCycleA componentDidMount')
     }

     shouldComponentUpdate(){
         console.log('LifeCycleA shouldComponentUpdate')
         return true
     }

     getSnapshotBeforeUpdate(prevProp,prevState){
         console.log('LifeCycleA getSnapshotBeforeUpdate')
         return null
     }
     componentDidUpdate(prevProp,prevState,snapshot){
         console.log('LifeCycleA componentDidUpdate')
     }

     stateChange = () =>{
         this.setState({
            name : 'Raki'  
         })
     }

    render() {
        console.log('LifeCycleA Render')
        return (
            <div>
                Life CycleA ! 
                <button onClick={this.stateChange}>Change State</ button>
                <LifeCycleB /> 
            </div>
           
        )
    }
}

export default LifeCycleA
