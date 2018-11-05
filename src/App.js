import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react';
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
    console.log(userName, eMail, loggedIn, 'username email is logged in?');
    this.setState({
      username: userName,
      email: eMail,
      password: passWord,
      isLoggedIn: loggedIn
    })
  }
  handleLogout = () => {
    
  }

  render() {
    return (
      <div className="App">
        <Header as='h1'>
          Barley Legal
        </Header>
        {this.state.isLoggedIn ? <GetBeers handleLogout={this.handleLogout}/> : <Login loginHandler={this.loginHandler}/>}
      </div>
    );
  }
}

export default App;
