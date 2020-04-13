import React, { Component } from 'react';
import ComponentC from './ComponentC'
import ComponentD from './ComponentD';
class ComponentB extends Component {
    render() {
        return (
            <div>
               <ComponentC></ComponentC>
            </div>
        )
    }
}

export default ComponentB
