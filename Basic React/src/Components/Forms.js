import React, { Component } from 'react'

 class Forms extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'',
              comment:'',
              topic:''
         }
     }
     handleNameChanger = event => {
          this.setState({
            name : event.target.value
          })
     }
     handleCommentChanger = event => {
        this.setState({
          comment : event.target.value
        })
     }
     handletopicChanger = event => {
        this.setState({
          topic : event.target.value
        })
     }
     handleSubmit = event => {
        alert(`Name : ${this.state.name} 
comment : ${this.state.comment} 
option : ${this.state.topic}`)
        event.preventDefault()
     }
     
    render() {
        //const {name,comment,topic} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input 
                            type='text'
                            value={this.state.name} 
                            //value={name}
                            onChange={this.handleNameChanger}>
                        </input>
                    </div>
                    <div>
                        <label>Comment</label>
                        <textarea
                         value={this.state.comment}
                         //value={comment} 
                         onChange={this.handleCommentChanger}>
                         </textarea>
                    </div>
                    <div>
                        <label>Comment</label>
                        <select value={this.state.topic}  /*value={topic}*/  onChange={this.handletopicChanger} >
                            <option value='react'>React</option>
                            <option value='angular'>Angular</option>
                            <option value='vue'>Vue</option>
                        </select>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Forms
