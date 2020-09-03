import React, {Fragment, Component, useEffect, useState} from 'react'
const axios = require('axios').default;

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {user: '', pass:''};
        this.handleUser = this.handleUser.bind(this);
        this.handlePass = this.handlePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleUser(event){
        this.setState({user:event.target.value})
    }

    handlePass(event){
        this.setState({pass:event.target.value})
    }

    async handleSubmit(event){
        console.log(this.state.user, this.state.pass)
        event.preventDefault()
        const theUser = await axios.post("http://localhost:3000/users", {
          name:this.state.user,
          phoneNumber:this.state.pass  
        })

        console.log(theUser.data);

    }

    render(){
        return( //i am doing the parentheses bc i like putting the stuff on another line
            <header className="App-header">
                <h1>CQ</h1>
                <h2>Login</h2>
                <div>
                    <input type="text" name="Username" id="user" placeholder="name" value={this.state.user} onChange={this.handleUser}/>
                    <input type="text" name="Password" id="pass" placeholder="phone number" value={this.state.pass} onChange={this.handlePass}/>
                    <button onClick={this.handleSubmit}> Create New User</button>
                </div>
            </header>
        )
        
        
    }
}

export default Login