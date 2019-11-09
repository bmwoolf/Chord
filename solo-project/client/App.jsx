import React, { Component } from  "react";
import { render } from "react-dom";
import Signup from "./Signup.jsx";
import Homepage from "./Homepage/Homepage.jsx"
import Easteregg from './Easteregg.jsx'

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            login: false,
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            loginUsernameString: '',
            loginPasswordString: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.getFirstname = this.getFirstname.bind(this)
        this.getLastname = this.getLastname.bind(this)
        this.getUsername = this.getUsername.bind(this)
        this.getPassword = this.getPassword.bind(this)
        this.loginUsername = this.loginUsername.bind(this)
        this.loginPassword = this.loginPassword.bind(this)
    }

    loginUsername(event){
        this.setState({loginUsernameString: event.target.value})
    }

    loginPassword(event){
        this.setState({loginPasswordString: event.target.value})
    }

    getFirstname(event) {
        this.setState({firstname: event.target.value})
    }

    getLastname(event) {
        this.setState({lastname: event.target.value})
    }

    getUsername(event) {
        this.setState({username: event.target.value});
    }

    getPassword(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        fetch('/signup', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({firstname: this.state.firstname, lastname: this.state.lastname, username: this.state.username, password: this.state.password})
        })
        .then(response => console.log(response))
        .then(() => this.setState({ login: true }))
        .catch((err) => console.log(err))
    }
    
    render () {
        if (this.state.login === false) {
            return <Signup handleSubmit={this.handleSubmit} state={this.state} getFirstname={this.getFirstname} getLastname={this.getLastname} getUsername={this.getUsername} getPassword={this.getPassword} loginUsername={this.loginUsername} loginPassword={this.loginPassword}/> 
        } else {
            return <Homepage />
        }
        // return <Homepage />
    }
}

export default App;