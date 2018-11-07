import React, { Component } from 'react';
import { Grid, Image, Divider, Header } from 'semantic-ui-react';
import './style.css'
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class UsersBeers extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  }
  
  render(){
    return(
    <Grid columns={3} >
      <div id='title'>
        <Header as='h2' >
          Liked Beer
       </Header>
      </div>
     
      <Grid.Row>
        
        <Grid.Column>
          <Image src='https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fonpasture.com%2Fwp-content%2Fuploads%2F2014%2F04%2F13-08-08_015226_cbeer.jpg&f=1' />
        </Grid.Column>
        
      </Grid.Row>
      <Divider fitted />
      <Grid.Row>
        <Grid.Column>
          <Image src='https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fonpasture.com%2Fwp-content%2Fuploads%2F2014%2F04%2F13-08-08_015226_cbeer.jpg&f=1' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fonpasture.com%2Fwp-content%2Fuploads%2F2014%2F04%2F13-08-08_015226_cbeer.jpg&f=1' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fonpasture.com%2Fwp-content%2Fuploads%2F2014%2F04%2F13-08-08_015226_cbeer.jpg&f=1' />
        </Grid.Column>
      </Grid.Row>
        <Divider fitted />
      <Grid.Row>
        <Grid.Column>
          <Image src='https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fonpasture.com%2Fwp-content%2Fuploads%2F2014%2F04%2F13-08-08_015226_cbeer.jpg&f=1' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fonpasture.com%2Fwp-content%2Fuploads%2F2014%2F04%2F13-08-08_015226_cbeer.jpg&f=1' />
        </Grid.Column>
        <Grid.Column>
          <Image src='https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fonpasture.com%2Fwp-content%2Fuploads%2F2014%2F04%2F13-08-08_015226_cbeer.jpg&f=1' />
        </Grid.Column>
      </Grid.Row>
    </Grid>

    )
  }
}

export default withRouter(UsersBeers);