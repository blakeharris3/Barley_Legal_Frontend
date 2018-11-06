import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import './App.css';
import Login from './Login';
import GetBeers from './GetBeers'
// import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
      isLoggedIn: false
    }
  }
  loginHandler = (userName, passWord, eMail, loggedIn) => {
    this.setState({
      username: userName,
      email: eMail,
      password: passWord,
      isLoggedIn: loggedIn
    })
  }
  logoutHandler = (loggedIn) => {
    this.setState({
      isLoggedIn: loggedIn
    })
  }

  render() {
    return (
      <div className="App">
        <Header as='h1'>
          Barley Legal
        </Header>
        {this.state.isLoggedIn ? <GetBeers logoutHandler={this.logoutHandler}/> : <Login loginHandler={this.loginHandler}/>}

      </div>
    );
  }
}

export default App;
