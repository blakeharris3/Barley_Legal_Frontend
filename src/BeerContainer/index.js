import React, { Component } from 'react';
// import './App.css';
import GetBeers from '../GetBeers'
// import Login from "../Login"
// import UsersBeers from '../UsersBeer'


class Beers extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
      isLoggedIn: false,
      userId: ''
    }
  }
  componentDidMount(){
    this.handleUserIdLogin(this.props)
  }
  handleUserIdLogin = (data) => {
    if(data.location.state) {
      this.setState({
        userId: data.location.state.userId      
      })
    }
  }

handleLogout = (e) => {
    e.preventDefault();
    this.props.history.push('/');

  }  

  render() {
    return (
      <div className="Beer">  
        {/* {this.state.isLoggedIn ? <GetBeers logoutHandler={this.logoutHandler}/> : <Login loginHandler={this.loginHandler}/>} */}
        {/* <GetBeers /> */}
        {/* <Login logoutHandler={this.logoutHandler} loginHandler={this.loginHandler} /> */}
        <GetBeers handleLogout={this.handleLogout} userId={this.state.userId}/>
        {/* <UsersBeers /> */}
      </div>


    );
  }
}

export default Beers;