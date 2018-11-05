import React, { Component } from "react";
import { Container, Segment, Image, Icon, Header, Button, Form } from "semantic-ui-react";

export default class GetBeers extends Component {
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
          <Button ></Button>
        </Form>
        
      </Container>
    )
  }
}