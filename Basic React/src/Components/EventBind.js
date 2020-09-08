import React, { Component } from 'react'

 class EventBind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              Msg: 'Hello'
         }
         this.txtChange=this.txtChange.bind(this)
     }
    //txtChange(){
    //   this.setState({
    //      Msg: 'Good Byee !'
    //   }) 
    //   console.log(this)
    //}

    txtChange = () => {
        this.setState({
            Msg :' GoodBye ! '
        })
    }
    
     render() {
        return (
            <div>
                <h1>{this.state.Msg}</h1>
                { /* <button onClick={this.txtChange.bind(this)}>Click here </button> */}
                { /* <button onClick={()=>this.txtChange()}>Click here </button> */}
                { /* <button onClick={this.txtChange}>Click here </button> */}
                <button onClick={this.txtChange}>Click here </button> 

            </div>
        )
    }
}

export default EventBind
