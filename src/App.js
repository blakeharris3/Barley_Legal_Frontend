import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import './App.css';
import Login from './Login';
import Beers from './BeerContainer'
import BeerHeader from './Header'
import UsersBeers from './UsersBeer'
import { Route, Switch, withRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header as='h1' >
          Barley Legal
        </Header>
        <BeerHeader/>
        <Switch >
          <Route exact path='/' component={Login} />
          <Route exact path='/beers' component={Beers} />
          <Route exact path='/usersbeers' component={UsersBeers}/>
          {/* {this.state.isLoggedIn ? <GetBeers logoutHandler={this.logoutHandler}/> : <Login loginHandler={this.loginHandler}/>} */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);