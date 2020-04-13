import React, { Component } from 'react'
import RefFunc from './refFunc'

export class refFuncParent extends Component {
    constructor(props) {
        super(props)
        this.inputRef= React.createRef()
    }
    clickMe=()=>{
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <RefFunc ref={this.inputRef}></RefFunc>
                <button onClick={this.clickMe}>Click Me</button>

            </div>
        )
    }
}

export default refFuncParent
