import React, { Component } from "react";
import { Container, Icon, Header, Button, Form, Grid } from "semantic-ui-react";
import ShowBeers from '../ShowBeers/index.js'
import UsersBeers from '../UsersBeers/index.js'
import { withRouter } from 'react-router-dom';

 class GetBeers extends Component {
  constructor(){
    super();
    this.state = {
      beers: [],
      allBeers:[],
      isLiked: [],
      toTry:[],
      isDisliked: []
    }
  }
  toTryRemove = async(beerRemoved) => {
    this.setState({
      toTry: [beerRemoved]
    })
  }
  getBeer = async () => {
    try {
      const allBeers = await fetch("https://stormy-wildwood-16563.herokuapp.com/api/v1/auth/");
      const beersJson = await allBeers.json();
      return beersJson
      
    } catch (err) {
      console.log('error')
      return err
    }
  }

  handleLiked = (beer) => {   
    this.setState({
      isLiked: [...this.state.isLiked, beer ],
    })
  }   

  handleToTry = (beer) => {   
    this.setState({
      toTry: [...this.state.toTry, beer ],
    })
  }

  handleDisliked = (beer) => {   
    this.setState({
      isDisliked: [...this.state.isDisliked, beer ],
    })
  }   
  
  componentDidMount(){
     if(this.props.logged === false){
       
     }
    this.getBeer().then((beers)=>{
       this.setState({allBeers: beers.data.data})
     }).catch((err)=>{
       console.log(err)
     });
  }
  render(){

    return(
      <Grid columns={2}>
       
        <Container textAlign='center'>
        
          <Form onSubmit={this.props.handleLogout}>
            <Button fluid color='orange' size='large' type='Submit' > <Icon name='beer' />Logout</Button>
          </Form>
          {/* The indentation in this section could be improved */}
        </Container> 
        <Grid.Column width={10}>
          <Header as='h1' attached='top'>
            Beers
          </Header>
          <ShowBeers userId={this.props.userId} allBeers={this.state.allBeers} handleLiked={this.handleLiked} handleToTry={this.handleToTry} handleDisliked={this.handleDisliked} /> 
        </Grid.Column>  
        <Grid.Column width={6}>
          <Header as='h1' attached='top'>
            User's Beer
          </Header>
          <UsersBeers isLiked={this.state.isLiked} toTry={this.state.toTry} isDisliked={this.state.isDisliked} toTryRemove={this.toTryRemove}/>
        </Grid.Column>
       
      </Grid>
      
    )
  }
}
export default withRouter(GetBeers);