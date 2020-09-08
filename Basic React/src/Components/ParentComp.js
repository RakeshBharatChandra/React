import React, { Component ,PureComponent} from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'
import MemoComp from './MemoComp'

 class ParentComp extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              Name : 'Raki'
         }
     }

     componentDidMount(){
         setInterval(()=>{
             this.setState({
                Name : 'Lalli'
             })
         },2000)
         
     }
     
    render() {
        console.log('************Parent Component ***************')
        return (
            <div>
                ParentComponent
                {/* <RegularComp name={this.state.Name}></RegularComp> */}
                {/* <PureComp name={this.state.Name}></PureComp> */}
                <MemoComp name={this.state.Name} />
                
                
            </div>
        )
    }
}

export default ParentComp
