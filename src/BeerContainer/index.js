import React, { Component } from 'react';
import GetBeers from '../GetBeers'



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
        <GetBeers handleLogout={this.handleLogout} userId={this.state.userId} username={this.state.username} isLogged/>
      </div>
    );
  }
}

export default Beers;