import React, { Component } from 'react'

 class LifeCycleB extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name : 'Raki'
         }
         console.log('LifeCycleB Constructor')
     }

     static getDerivedStateFromProps(){
         console.log('LifeCycleB getDerivedStateFromProps')
         return null
     }

     componentDidMount(){
        console.log('LifeCycleB componentDidMount')
     }

     shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProp,prevState){
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(prevProp,prevState,snapshot){
        console.log('LifeCycleB componentDidUpdate')
    }
     
    render() {
        console.log('LifeCycleB render')
        return ( <div>LifeCycle B !</div>)
    }
}

export default LifeCycleB
