import React, { Component } from 'react'

 class User extends Component {
    render() {
        return (
            <div>
                `Rakesh` 
                ``{this.props.name}``
                {this.props.name()}
               `` {this.props.name(true)}``


            </div>
        )
    }
}

export default User
