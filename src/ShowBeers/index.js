import React, {Component} from 'react';
import { Card, Segment, Button, Icon } from 'semantic-ui-react';
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
      
      const likedBeer = await fetch('http://localhost:9000/api/v1/auth/isLiked', {
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
      
      this.props.handleLiked(likedBeerJson);
      
    } catch (error) {
      console.log(error)
    }
  }
  addToTryBeer = async (beers, e) => {
    try {
      const toTry = await fetch('http://localhost:9000/api/v1/auth/toTry', {
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
      this.props.handleToTry(toTryJson);
    } catch (error) {
      
      console.log(error)
    }
  }
  addDislikedBeer = async (beers, e) => {
    try {
      console.log('hitting disliked try')
      const dislikedBeer = await fetch('http://localhost:9000/api/v1/auth/isDisliked', {
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
      this.props.handleDisliked(dislikedBeerJson);
    } catch (error) {
      console.log(error)
    }

  }
    render(){
      const beersList = this.props.allBeers.map((beer, i) => {
      return (
        <Card color='orange' key={i} style={{ maxWidth: 300 }} >
          {/* <Image src={beer.labels} size='small' floated='left' /> */}
          <Card.Header textAlign='right'></Card.Header>
          <Card.Content>
            <Segment>
              <h3>Name:</h3>
              <h2>{beer.name}</h2>
              <p>{beer.description}</p>
              <p>ABV: {beer.abv}</p>
            </Segment>
            <Button fluid onClick={this.addLikedBeer.bind(null, beer)}> <Icon name='like' />Like</Button><br />
            <Button fluid onClick={this.addToTryBeer.bind(null, beer)}> <Icon name='beer' />Want to Try</Button><br />
            <Button fluid onClick={this.addDislikedBeer.bind(null, beer)}> <Icon name='thumbs down' />Dislike</Button><br />
            <Button fluid > <Icon name='ban' />Not Interested</Button><br />
          </Card.Content>
        </Card>
      )
    });
  return(
    <div style = {{ display: 'flex', justifyContent: 'center' }} >

  <Card.Group>
    {beersList}
  </Card.Group>
    </div >
  )}  
}
export default withRouter(ShowBeers);