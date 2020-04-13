import React, { Component } from 'react'
import ComponentD from './ComponentD'
import { UserConsumer } from './Context'
class ComponentC extends Component {
    render() {
        return (
            <div>
                Inside the ComponentC
                <UserConsumer>
                    {(context)=>{
                        return <div>{context}</div>
                        
                    }}
                </UserConsumer>
                {/* <ComponentD></ComponentD> */}
            </div>
        )
    }
}

export default ComponentC
