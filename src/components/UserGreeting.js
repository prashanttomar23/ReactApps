import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
              isLoggedIn: true
        }
    }
    
    render() {
        return (
                this.state.isLoggedIn ?(
                <h2>Welcome bro</h2>): (
                <h3>welcome guest</h3>)
        )
    }
}

export default UserGreeting
