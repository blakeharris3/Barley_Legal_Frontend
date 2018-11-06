import React, { Component } from "react";
import { Container, Segment, Image, Icon, Header, Button, Form } from "semantic-ui-react";

export default class GetBeers extends Component {
  constructor(){
    super();
    this.state = {
      beers: [],
      allBeers:[]
    }
  }
  getBeer = async () => {
    try {
      const allBeers = await fetch('https://sandbox-api.brewerydb.com/v2/beers?key=7d2b7088dd751a4d391faa03edcb0118');
      const beersJson = await allBeers.json();
      return beersJson
    } catch (err) {
      return err
    }
  }
  handleLogout = (e) => {
    e.preventDefault();
    this.props.logoutHandler(false);

  }
  
  componentDidMount(){
     this.getBeer().then((beers)=>{
       this.setState({allBeers: beers.data})
     }).catch((err)=>{
       console.log(err)
     });
  }
  render(){
    return(
      <Container>
        <Header as='h1' attached='bottom'>
          Beers
        </Header>
        <Segment>
          Beer Info
        </Segment>
        <Form onSubmit={this.handleLogout}>
          <Button fluid color='orange' size='large' type='Submit' > <Icon name='beer' />Logout</Button>
        </Form>
        
      </Container>
    )
  }
}