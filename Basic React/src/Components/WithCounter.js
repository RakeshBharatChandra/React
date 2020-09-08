import React from 'react'

const WithCounter = (WrappedComponent,incrementNumb) => {
    class WithCounter extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
    
        incrementCount = () => {
            this.setState(prevState => {
                return { count : prevState.count + incrementNumb  } 
            })
        }
        
        render(){
            console.log(this.props.name)
            return <WrappedComponent count={this.state.count}
            incrementCount={this.incrementCount }
            {...this.props} />
        }    
    }
    return WithCounter
}
export default WithCounter