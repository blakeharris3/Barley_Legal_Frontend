import React, { Component } from 'react';
import { Grid, Header, Card, Container, Image, Divider, Button } from 'semantic-ui-react';
import './style.css'
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class UsersBeers extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  }
  constructor(){
    super()
    this.state = {
      rendered: false
    }
  }
  removeToTry = async(beer , e) => {
    const JsonUser = localStorage.getItem("userId")
    const userId = JSON.parse(JsonUser)
    const abeer = await fetch("http://localhost:9000/api/v1/auth/toTry", 
    {method: "DELETE",
    body: JSON.stringify(beer),
    userId: userId
  })
    const theBeer = abeer.json() 
    console.log("this happend", theBeer)
    this.props.toTryRemove(theBeer)
  }

  render(){
    const likedBeersList = this.props.isLiked.map((beer, i) => {
      return (
        <Grid color='orange' key={i} style={{ maxWidth: 300 }} columns={1}>
          <Grid.Column >
            <Card color='orange'>
              {beer[beer.length - 1]}
            </Card>          
          </Grid.Column>
        </Grid>
      )
    })


    const tryBeersList = this.props.toTry.map((beer, i) => {
      return (
        <Grid color='orange' key={i} style={{ maxWidth: 300 }} columns={1}>
          <Grid.Column>
            <Card color='orange' >
              {beer[beer.length - 1]}    
            {/*<Button onClick={this.removeToTry.bind(null, beer[i])}>Remove</Button> */}
            </Card>
          </Grid.Column>
        </Grid>
      )
    })


    const dislikedBeersList = this.props.isDisliked.map((beer, i) => {
      return (
        <Grid color='orange' key={i} style={{ maxWidth: 300 }} columns={1}>
          <Grid.Column>
            <Card color='orange'>
              {beer}
            </Card>          
          </Grid.Column>
        </Grid>
      )
    })


    //console.log(this.props.isLiked, 'is liked beers usersbeers')
    return(
    <Container>
    <Grid columns={3} >

      <Grid.Column >
        <Header as='h2' attached='top' >
        Liked Beer
       </Header>
          {likedBeersList}
      </Grid.Column>
    
        
      <Grid.Column>
        <Header as='h2' attached='top' >
            To Try Beer
        </Header>
       {tryBeersList}
      </Grid.Column>
      <Grid.Column>
        <Header as='h2' attached='top' >
            Disliked Beer
        </Header>
          {dislikedBeersList}
      </Grid.Column>
    </Grid>
    <Divider/>
    <Image src='https://i.imgur.com/QqgBGfq.jpg' size='huge'/>
  </Container>
    )
  }
}

export default withRouter(UsersBeers);