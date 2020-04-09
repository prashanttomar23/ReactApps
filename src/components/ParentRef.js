import React, { Component } from 'react'
import ChildRef from './ChildRef'

class ParentRef extends Component {
    constructor(props) {
        super(props)
        this.componentRef=React.createRef()
    }
    clickHandler=()=>{
        this.componentRef.current.increment()
    }
    
    render() {
        return (
            <div>
                <ChildRef ref={this.componentRef}></ChildRef>
                <button onClick={this.clickHandler}>Increment</button>
            </div>
        )
    }
}

export default ParentRef
