import React, { Component } from 'react'

const arrUsers=[]
let idC=0
class Form extends Component { 
    constructor(props) {
        super(props)
        this.state = {
             username:'',
             arr: [],
             isAddBtn:true     
        }
    }
    handleUsenameChange=(event)=>{
        this.setState({
            username:event.target.value,    
        })
    }
    addUser=()=>{
        arrUsers.push(
            {id:parseInt(10000*Math.random()),
            name:this.state.username
        })
        // console.log(arrUsers)
        this.setState({
            arr: arrUsers,
            username:""
            
        })
        // console.log(this.state)
    }
    editUser=(id)=>{
        // console.log(event.target.parentNode.firstChild.innerHTML)
        console.log(id)
        arrUsers.forEach(user => {
            if(user.id==id){
                idC=id
                this.setState({
                    username:user.name,
                    isAddBtn:false
                })
                // console.log("yes from edit",user)
            }  
        });
        // console.log(this.findByID(id))
        // this.setState({
        //     username:this.findByID.bind(this,id).name
        // })
    }
    updateUser=()=>{
        arrUsers.forEach(user => {
            if(user.id==idC){
                user.name=this.state.username
                console.log("yes from edit",user)
            }  
        });
        this.setState({
            isAddBtn:true,
            arr:arrUsers
        })
        // console.log(this.state.username,idUser)
    }
    deleteUser=deleteId=>{
        console.log(deleteId)
        arrUsers.forEach(user => {
            if(user.id==deleteId){
                console.log(user,arrUsers.indexOf(user))
                arrUsers.splice(arrUsers.indexOf(user),1)
                console.log("this is arrayuses",arrUsers)
            }
        });
        this.setState({
            arr:arrUsers
        })

    }
    findByID=(ID)=>{
        arrUsers.forEach(user => {
            if(ID==user.id){
                return(user)
            }
        });
    }
    render() {
        
            if (this.state.isAddBtn){
                return(
                <div>
                <div>Usernames</div>
                <input type='text' value={this.state.username} onChange={this.handleUsenameChange}></input>
                <button onClick={this.addUser}>ADD</button>    
                <ul>{arrUsers.map(user=>
                    <div key={user.id}><span>{user.name}</span>
                    <button onClick={this.editUser.bind(this,user.id)} >EDIT</button>
                    <button onClick={this.deleteUser.bind(this,user.id)} >DELETE</button></div>   
                )}</ul>
            </div>)
            }
            else {
                return(
                    <div>
                <div>Usernames</div>
                <input type='text' value={this.state.username} onChange={this.handleUsenameChange}></input>
                <button onClick={this.updateUser.bind(this)}>Update</button>    
                <ul>{arrUsers.map(user=>
                    <div key={user.id}><span>{user.name}</span>
                    <button onClick={this.editUser.bind(this,user.id)} >EDIT</button>
                    <button onClick={this.deleteUser.bind(this,user.id)} >DELETE</button></div>  
                )}</ul>
                </div>
                )
            }
            
    }
}
export default Form
