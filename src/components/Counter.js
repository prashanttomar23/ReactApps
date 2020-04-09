import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increase(){
        this.setState({
            count: this.state.count+1
        },()=>{console.log(this.state.count)})
        
    }
    decrease(){
        this.setState({
            count: this.state.count-1
        })
        console.log(this.state.count)
    }
    render() {
        return (
            <div>
                <h2>counter : {this.state.count}</h2>
                <button onClick={()=>{this.increase()}}>Increase</button>
                <button onClick={()=>{this.decrease()}}>Deccrease</button>
            </div>
        )
    }
}

export default Counter
