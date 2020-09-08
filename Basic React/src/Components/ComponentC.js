import React, { Component } from 'react'
import ComponentE from './ComponentE'
import userContext, { UserConsumer } from './UserContext'

 class ComponentC extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'Raki'
         }
     }
     
    static contextType=userContext
    render() {
        return (
            <div>
                ComponentC context {this.context} 
                <UserConsumer>
              {name =>{
                  return <div>Hii {this.state.name} </div>
              }}
            </UserConsumer>
        <ComponentE/>
        </div>

        )
    }
}

export default ComponentC
