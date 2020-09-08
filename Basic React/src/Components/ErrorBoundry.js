import React, { Component } from 'react'

class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError:false
        }
    }
    
    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }

    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }
    render() {
            
            if(this.state.hasError){
               return <h4>Thanos Is Villan</h4>
            }
            return this.props.children
    }
}

export default ErrorBoundry
