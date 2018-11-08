import React, { Component } from 'react';
import { Divider, Segment, Icon} from 'semantic-ui-react';
import './App.css';
import Login from './Login';
import Beers from './BeerContainer'
import BeerHeader from './Header'

import { Route, Switch, withRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">

        <BeerHeader/>
        <Divider/>
        <Switch >
          <Route exact path='/' component={Login} />
          <Route exact path='/beers' component={Beers} />
        </Switch>
        <Segment color='orange'>
          <Divider horizontal >
            Barley Legal <Icon circular name='copyright outline'/> Copyright 2018 All Rights Reserved
          </Divider>
        </Segment>
      </div>
    );
  }
}

export default withRouter(App);