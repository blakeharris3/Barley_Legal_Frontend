import React from 'react';
import { Card  } from 'semantic-ui-react';

const ShowBeers = (props) => {
  console.log(props.allBeers, 'all beers')
  // const beersList = props.allBeers.map((beers, i) => {
    return (
      <Card color='orange' /*key={i}*/ style={{ maxWidth: 300 }} >
        {/* <Card.Header textAlign='right'></Card.Header>
        <Card.Content>
          <Segment>
            <Image src={beers.urlToImage} size='small' floated='left' />
            <h3>{beers.title}</h3>
            <a>{beers.url}</a>
            <h4>{beers.description}</h4>
            <p>{beers.content}</p>
          </Segment>
        </Card.Content> */}
      </Card>
    )
  // });
  // return (
  //   <div >
  //     <h4>Beers List</h4>
  //     <ul>
  //       {beersList}
  //     </ul>
  //   </div >
  // )
}
export default ShowBeers;