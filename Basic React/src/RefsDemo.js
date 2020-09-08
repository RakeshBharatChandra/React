import React, { Component } from 'react'

 class RefsDemo extends Component {
    constructor(props) {
        super(props)
    
             this.inputRef = React.createRef()
             this.cbRef=null;
             this.setcbRef= (element)=>{
                 this.cbRef= element
             }
    }
    
    componentDidMount() {   
       // if(this.cbRef){
            this.cbRef.focus()
       // }
        //this.inputRef.current.focus()
       // console.log(this.inputRef)
    }

    buttonClicked=()=>{
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}/>
                <input type='text' ref={this.setcbRef}/>
                <button onClick={this.buttonClicked}> Submit </button>
            </div>
        )
    }
}

export default RefsDemo
