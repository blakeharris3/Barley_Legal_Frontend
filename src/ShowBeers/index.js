import React, {Component} from 'react';
import { Card, Segment, Image, Button, Icon } from 'semantic-ui-react';

class ShowBeers extends Component {
    render(){
      const beersList = this.props.allBeers.map((beers, i) => {
      return (
        <Card color='orange' key={i} style={{ maxWidth: 300 }} >
          {/* <Image src={beers.labels} size='small' floated='left' /> */}
          <Card.Header textAlign='right'></Card.Header>
          <Card.Content>
            <Segment>
              <h3>Name:</h3>
              <h2>{beers.name}</h2>
              <p>{beers.description}</p>
              <p>ABV: {beers.abv}</p>
            </Segment>
            <Button fluid > <Icon name='like' />Like</Button><br />
            <Button fluid > <Icon name='beer' />Want to Try</Button><br />
            <Button fluid > <Icon name='thumbs down' />Dislike</Button><br />
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
export default ShowBeers;