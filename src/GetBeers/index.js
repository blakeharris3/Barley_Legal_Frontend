import React, { Component } from "react";
import { Container, Icon, Header, Button, Form } from "semantic-ui-react";
import ShowBeers from '../ShowBeers/index.js'

export default class GetBeers extends Component {
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
  componentDidUpdate(){
    console.log(this.state.isLiked)
  }
  getBeer = async () => {
    try {
      const allBeers = await fetch("http://localhost:9000/api/v1/auth/");
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
    console.log(this.state.isLiked[0].data.isLiked, 'This is liked')
    
  }   

  handleToTry = (beer) => {   
    this.setState({
      toTry: [...this.state.toTry, beer ],
    })
    console.log(this.state.toTry[0].data.toTry, 'toTry')
    
  }

  handleDisliked = (beer) => {   
    this.setState({
      isDisliked: [...this.state.isDisliked, beer ],
    })
    console.log(this.state.isDisliked[0].data.isDisliked, ' is disliked')
  }   
  
  componentDidMount(){
     this.getBeer().then((beers)=>{
       this.setState({allBeers: beers.data.data})
     }).catch((err)=>{
       console.log(err)
     });
  }
  render(){

    return(
      <Container textAlign='center'>
        <Header as='h1' attached='bottom'>
          Beers
          
        </Header>
        <ShowBeers userId={this.props.userId} allBeers={this.state.allBeers} handleLiked={this.handleLiked} handleToTry={this.handleToTry} handleDisliked={this.handleDisliked}/>
        <Form onSubmit={this.props.handleLogout}>
          <Button fluid color='orange' size='large' type='Submit' > <Icon name='beer' />Logout</Button>     
        </Form>
          
      </Container>
      
    )
  }
}