import React, {Component} from 'react';
import { Card, Button, Icon, Container, Image } from 'semantic-ui-react';
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class ShowBeers extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  }
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
  componentDidMount() {
    
    const userId = JSON.parse(localStorage.getItem("userId"))
    if (userId){
      this.handleUserId(userId)
      
    }
  }
  handleUserId = (userIdData) => {
    if (userIdData) {
      this.setState({
        userId: userIdData
      })
    }
  }
  addLikedBeer = async (beers, e) => {
    try {
      const likedBeer = await fetch('https://stormy-wildwood-16563.herokuapp.com/api/v1/auth/isLiked', {
        method: 'PUT',
        body: JSON.stringify({
          name: beers.name,
          userId: this.state.userId
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
      });
      const likedBeerJson = await likedBeer.json()
      this.props.handleLiked(likedBeerJson.data.isLiked);
      
    } catch (error) {
      console.log(error)
    }
  }
  addToTryBeer = async (beers, e) => {
    try {
      const toTry = await fetch('https://stormy-wildwood-16563.herokuapp.com/api/v1/auth/toTry', {
        method: 'PUT',
        body: JSON.stringify({
          name: beers.name,
          userId: this.state.userId
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
      });
      const toTryJson = await toTry.json()
      this.props.handleToTry(toTryJson.data.toTry);
    } catch (error) {
      
      console.log(error)
    }
  }
  addDislikedBeer = async (beers, e) => {
    try {
      const dislikedBeer = await fetch('https://stormy-wildwood-16563.herokuapp.com/api/v1/auth/isDisliked', {
        method: 'PUT',
        body: JSON.stringify({
          name: beers.name,
          userId: this.state.userId
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
      });
      const dislikedBeerJson = await dislikedBeer.json()
      this.props.handleDisliked(dislikedBeerJson.data);
    } catch (error) {
      console.log(error)
    }

  }
  
    render(){
      const beersList = this.props.allBeers.map((beer, i) => {
        let img = "https://i.imgur.com/CaGMh88.png";
        if (beer.labels){
        img = beer.labels.icon
        }
        return (
        <Card color='orange' key={i} style={{ maxWidth: 300 }} >
          
          <Card.Header textAlign='right'></Card.Header>
          <Card.Content>
            <Container>
                <Image src={img} /> 
              <h3>Name:</h3>
              <h2>{beer.name}</h2>
              <p>{beer.description}</p>
              <p>ABV: {beer.abv}</p>
            </Container>
            <Button fluid onClick={this.addLikedBeer.bind(null, beer)}> <Icon name='like' />Like</Button><br />
            <Button fluid onClick={this.addToTryBeer.bind(null, beer)}> <Icon name='beer' />Want to Try</Button><br />
            <Button fluid onClick={this.addDislikedBeer.bind(null, beer)}> <Icon name='thumbs down' />Dislike</Button><br />
          </Card.Content>
        </Card>
      )
    });
  return(
    <div style = {{ display: 'flex', justifyContent: 'center' }} >

  <Card.Group itemsPerRow={3}>
    {beersList}
  </Card.Group>
    </div >
  )}  
}
export default withRouter(ShowBeers);