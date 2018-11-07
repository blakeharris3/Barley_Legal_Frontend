import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.css';


const BeerHeader = () => {
  return (
    <Header>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/beers">Beer</Link></li>
        <li><Link to="/usersbeers">User</Link></li>
      </ul>
    </Header>
  )
}

export default BeerHeader;
