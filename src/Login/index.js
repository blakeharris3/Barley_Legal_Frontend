import React, { Component } from 'react';
import { Button, Form, Input, Header, Grid, Segment, Icon } from 'semantic-ui-react';
import "./login.css";

export default class Login extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '', 
      email: ''
    }
  }
  handleInput = (e) => {
    console.log(e.currentTarget.name, 'name');
    console.log(e.currentTarget.value, 'value');
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const loginResponse = await fetch('http://localhost:9000/auth/register', {
      method: 'POST',
      credentials: 'include', // this sends our session cookie with our request
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const parsedResponse = await loginResponse.json();
    if (parsedResponse.data === 'login successful') {
      // change our component
      console.log('success login')
      // this sends the user info to state 
      this.props.loginHandler(this.state.username, this.state.password, this.state.email, true);
  }
}
  render(){
    return(
      <Grid container columns={1} textAlign='center' verticalAlign='middle' style={{ height: '100%' }} inverted color='brown' >
        <Grid.Column style={{maxWidth: 500}} >
          <Header as='h2' attached='top' color='violet'>
            Login            
          </Header>
          <p>And Start Getting Lit</p>
          <Segment color='orange'>
            <Form onSubmit={this.handleSubmit}>
              <Input fluid icon='user' iconPosition='left' type='text' name='username' value={this.state.username} onChange={this.handleInput} placeholder='username'/>
              <Input fluid icon='lock' iconPosition='left' type='password' name='password' value={this.state.password} onChange={this.handleInput} placeholder='password'/>
              <Input fluid icon='mail' iconPosition='left' type='text' name='email' value={this.state.email} onChange={this.handleInput} placeholder='email'/>
              <Button fluid color='orange' size='large' type='Submit'> <Icon name='beer'/>Login</Button>
            </Form>
          </Segment>

        </Grid.Column>
     </Grid> 
    )
  }
}