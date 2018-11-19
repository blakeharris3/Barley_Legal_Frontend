import React from 'react';
import { Header, Image, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.css';


const BeerHeader = () => {
  return (
    <Segment>
      
    <Header>
      {/* Nesting a header component inside another header 
      component is not a good practice of DRY Principles */}
      <Header as='h1' >
          <Image src='https://i.imgur.com/CaGMh88.png' />
        Barley Legal
      </Header>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/beers">Beer</Link></li>
        <li><Link to="/usersbeers">User</Link></li>
      </ul>
    </Header>
    </Segment>
  )
}

export default BeerHeader;
