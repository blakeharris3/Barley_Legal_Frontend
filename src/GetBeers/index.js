import React, { Component } from "react";
import { Container, Icon, Header, Button, Form } from "semantic-ui-react";
import ShowBeers from '../ShowBeers/index.js'

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
      console.log('WHEN DOE STHIS HAPPEN')
      const allBeers = await fetch('https://sandbox-api.brewerydb.com/v2/beers?key=7d2b7088dd751a4d391faa03edcb0118', {
        mode: 'no-cors'
      });
      const beersJson = await allBeers.json();
      console.log(beersJson, 'beers json')
      return beersJson
      
    } catch (err) {
      console.log('error')
      return err
    }
  }
  handleLogout = (e) => {
    e.preventDefault();
    this.props.logoutHandler(false);

  }
  
  componentDidMount(){
     this.getBeer().then((beers)=>{
       console.log(beers.data, "data")
       this.setState({allBeers: beers.data})
       console.log(this.state.allBeers, "all beers")
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
        <ShowBeers allBeers={this.state.allBeers}/>
        <Form onSubmit={this.handleLogout}>
          <Button fluid color='orange' size='large' type='Submit' > <Icon name='beer' />Logout</Button>     
        </Form>
          
      </Container>
      
    )
  }
}