import React, { Component } from 'react';
import { Button, Form, Input, Header, Grid, Segment, Icon } from 'semantic-ui-react';
import "./login.css";
import { withRouter } from "react-router";

 class Login extends Component {
  constructor() {
    super();
    this.state = {
      usernameLog: '',
      passwordLog: '',
      usernameReg: '',
      passwordReg: '',
      userId: '',
      logged: false,
    }
  }

  componentDidUpdate(){
    if(this.state.userId){
      const userId = JSON.stringify(this.state.userId)
      localStorage.setItem("userId", userId)
    }
  }


  handleLoginInput = (e) => {
    e.preventDefault()
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  handleRegisterInput = (e) => {
    e.preventDefault();
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  handleRegister = async (e) => {
    e.preventDefault();
    const registerResponse = await fetch('https://stormy-wildwood-16563.herokuapp.com/api/v1/auth/register', {
      method: 'POST',
      body: JSON.stringify({username: this.state.usernameReg,
        password: this.state.passwordReg}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    const parsedResponse = await registerResponse.json();
    if (parsedResponse.data === 'register successful') {
      this.setState({
        userId: parsedResponse.userId
      })     
      this.props.history.push({
        pathname: '/beers',
        state: {userId: this.state.userId}
      })
    }
    else {
      console.log('this is not working')
    }
  }


  handleLogin = async (e) => {
    e.preventDefault();
    try{
      const userQ = await fetch("https://stormy-wildwood-16563.herokuapp.com/api/v1/auth/login", {
        method: "POST",
        body: JSON.stringify(
          {username: this.state.usernameLog,
          password: this.state.passwordLog
        }),
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsed = await userQ.json()
      if(parsed.logged === true){ 
        this.setState({
          userId: parsed._Id
        })               
        this.props.history.push({
          pathname: '/beers',
          state: {userId: this.state.userId,
          logged: true}
        })
      }
      else{
        this.setState({
           usernameLog: "",
           passwordLog: ""
        })
      }
    }
    catch(error){
      console.log(error)
    }
  }

  render() {
    return (
      <Grid container columns={1} textAlign='center' verticalAlign='middle' style={{ height: '100%' }} inverted color='brown' >
        <Grid.Column style={{ maxWidth: 500 }} >
          <Header as='h2' attached='top' color='violet'>
            Register
          </Header>
          <p>And Start Getting Lit</p>
          <Segment color='orange'>
            <Form onSubmit={this.handleRegister}>
              <Input fluid icon='user' iconPosition='left' type='text' name='usernameReg' value={this.state.usernameReg} onChange={this.handleRegisterInput} placeholder='username' />
              <Input fluid icon='lock' iconPosition='left' type='password' name='passwordReg' value={this.state.passwordReg} onChange={this.handleRegisterInput} placeholder='password' />
              {/* <Input fluid icon='mail' iconPosition='left' type='text' name='email' value={this.state.email} onChange={this.handleRegisterInput} placeholder='email' /> */}
              <Button fluid color='orange' size='large' type='Submit'> <Icon name='beer'/>Register</Button>
            </Form>
          </Segment>
          <Header as='h2' attached='top' color='violet'>
            Login
          </Header>
          <p>And Turn Up</p>
          <Segment color='orange'>
            <Form onSubmit={this.handleLogin}>
              <Input fluid icon='user' iconPosition='left' type='text' name='usernameLog' value={this.state.usernameLog} onChange={this.handleLoginInput} placeholder='username' />
              <Input fluid icon='lock' iconPosition='left' type='password' name='passwordLog' value={this.state.passwordLog} onChange={this.handleLoginInput} placeholder='password' />
              <Button fluid color='orange' size='large' type='Submit'> <Icon name='beer' />Login</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}
export default withRouter(Login);