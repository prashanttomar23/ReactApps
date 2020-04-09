import React, { Component } from 'react'

class Message extends Component {
    constructor(){
        super()
        this.state={
            message:"sup silvia",
            btnMesg:"sub"
        }
    }
    changeMessage(){
        this.setState({
            message:"Thanks for click",
            btnMesg:"Unsub"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>{this.changeMessage()}}>{this.state.btnMesg}</button>
            </div>
        )
    }
}

export default Message
