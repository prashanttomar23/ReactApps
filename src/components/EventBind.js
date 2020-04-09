import React, { Component } from 'react'

 class EventBind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message:"hello"
         }
        //  this.clickHandler=this.clickHandler.bind(this)
     }
    // clickHandler(){
    //     console.log(this)
    //     this.setState({
    //         message:"Good"
    //     })
    // }
     clickHandler=()=>{
         this.setState({
             message:'Good'
         })
     }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click Event</button> */}
                {/* <button onClick={()=>this.clickHandler()}>Click Event</button> */}
                <button onClick={this.clickHandler}>Click Event</button>
            </div>
        )
    }
}

export default EventBind
