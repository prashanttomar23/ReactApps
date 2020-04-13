import React, { Component } from 'react';
import ComponentB from './ComponentB';
import {UserProvider} from  './Context';


class ComponentA extends Component {
    render() {
        return (   
        <div>
            <UserProvider value="Hello Prashant from Component A">
            <ComponentB></ComponentB>
            </UserProvider>
            
        </div> 
            
        )
    }
}

export default ComponentA
