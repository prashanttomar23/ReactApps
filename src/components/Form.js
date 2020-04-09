import React, { Component } from 'react'

const arrUsers=[]

class Form extends Component {

    
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             arr: []
             
        }
    }
    handleUsenameChange=(event)=>{
        this.setState({
            username:event.target.value,
            
        })
    }
    handleSubmit=event=>{
        arrUsers.push(this.state.username)
        
        console.log(arrUsers)
        this.setState({
            arr: arrUsers,
            
        })
        console.log(this.state)
    }
    editUser=event=>{
        console.log(event.target.parentNode.firstChild.innerHTML)
    }
    deleteUser=event=>{
        console.log(event.target.parentNode.firstChild)
        arrUsers.splice(arrUsers.indexOf(event.target.parentNode.firstChild.innerHTML),1)
        console.log(arrUsers)
        this.setState({
            arr:arrUsers
        })

    }
    render() {
        return (
            <div>
                <div>Usernames</div>
                <input type='text' value={this.state.username} onChange={this.handleUsenameChange}></input>
                <button onClick={this.handleSubmit}>ADD</button>    
            <ul>{arrUsers.map(user=>
                    <div><span>{user}</span>
                    <button onClick={this.editUser} >EDIT</button>
                    <button onClick={this.deleteUser} >DELETE</button></div>
                    
            )}</ul>
            </div>
            
            
        )
    }
}
export default Form
