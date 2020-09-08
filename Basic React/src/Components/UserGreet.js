import React, { Component } from 'react'

 class UserGreet extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    render() {

        return this.state.isLoggedIn && <div>Hello Raakii !!</div>

        //return this.state.isLoggedIn ? (
        //    <div>Hello Raaki !!</div>
        //    ) : (
        //        <div>Hello user !!</div>
        //    )


       // let message 
       //     if(this.state.isLoggedIn){
       //             message=<div>Hii Rakii ! </div>
       //     }
       //     else{
       //         message=<div>hello guest !!</div>
       //     }
       //     return <div>{message}</div>
            
       // if(this.state.isLoggedIn){
       //     return(
       //         <div>Hello Raki ! </div>
       //     )
       // }
       // else 
       //     return( <div>Hello User !</div> )

       // return (
        //    <div>
         //       Hello Raki!
          //  </div>
       //)
    }
}

export default UserGreet
