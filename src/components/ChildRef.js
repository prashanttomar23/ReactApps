import React, { Component } from 'react'

class ChildRef extends Component {
    constructor(props) {
        super(props) 
        //this.inputRef = React.createRef()
        this.state={
            counter:0
        }
    }
    increment(){
         this.setState({
             counter:this.state.counter+1
         })
        console.log(this.state.counter)
    }
    render() {
        return (
            <div ref={this.inputRef}> 
                counter:{this.state.counter}
            </div>
            // <div>
            //     <input type="text"></input>
            // </div>
        )
    }
}

export default ChildRef
