import React, { Component } from 'react';
import { Button, Form, Input, Header, Grid, Segment, Icon } from 'semantic-ui-react';
import "./login.css";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  componentDidUpdate(){
    console.log(this.state, "line 15 login")
  }
  handleInput = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state, 'state')
    const loginResponse = await fetch('http://localhost:9000/api/v1/auth/register', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    const parsedResponse = await loginResponse.json();
    console.log(parsedResponse, 'parsed response')
    if (parsedResponse.data === 'login successful') {
      // change our component
      console.log('success login')
      // this sends the user info to state 
      this.props.loginHandler(this.state.username, this.state.password, this.state.email, true);
    }
    else {
      console.log('not working')
    }
  }
  handleLogin = async (e) => {
    e.preventDefault();
    try{
      const userQ = await fetch("http://localhost:9000/api/v1/auth/login", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if(userQ.status === 200){
        this.props.loginHandler(this.state.username, this.state.password, this.state.email, true);
      }
      else{
        this.state.username = "";
        this.state.password = "";
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
            <Form onSubmit={this.handleSubmit}>
              <Input fluid icon='user' iconPosition='left' type='text' name='username' value={this.state.username} onChange={this.handleInput} placeholder='username' />
              <Input fluid icon='lock' iconPosition='left' type='password' name='password' value={this.state.password} onChange={this.handleInput} placeholder='password' />
              <Input fluid icon='mail' iconPosition='left' type='text' name='email' value={this.state.email} onChange={this.handleInput} placeholder='email' />
              <Button fluid color='orange' size='large' type='Submit'> <Icon name='beer'/>Register</Button>
            </Form>
          </Segment>
          <Header as='h2' attached='top' color='violet'>
            Login
          </Header>
          <p>And Turn Up</p>
          <Segment color='orange'>
            <Form onSubmit={this.handleLogin}>
              <Input fluid icon='user' iconPosition='left' type='text' name='username' value={this.state.username} onChange={this.handleInput} placeholder='username' />
              <Input fluid icon='lock' iconPosition='left' type='password' name='password' value={this.state.password} onChange={this.handleInput} placeholder='password' />
              <Input fluid icon='mail' iconPosition='left' type='text' name='email' value={this.state.email} onChange={this.handleInput} placeholder='email' />
              <Button fluid color='orange' size='large' type='Submit'> <Icon name='beer' />Register</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}