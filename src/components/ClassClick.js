import React, { Component } from 'react'

class ClassClick extends Component {
    clickhandler(){
        console.log("for class")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickhandler}>Class</button>
            </div>
        )
    }
}

export default ClassClick
