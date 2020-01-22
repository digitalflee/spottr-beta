import React, { Component } from 'react'
import {Nav, Row, Col, Container, Image, Card, CardGroup, Button} from 'react-bootstrap'
import Memberships from './Memberships'

export class UserProfile extends Component {

    render() {

        return (
            <div>
                <Nav className="justify-content-center" activeKey="/home">
                   <h1><strong>USER NAME</strong></h1> 
                    </Nav>
                <Container>
                    <Row>
                        <Col>
                        <Image src="https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif" roundedCircle />
                        </Col>
                    </Row>
                </Container>
                <br/>
                <Container >
                    
                    <h1>View Memberships</h1>
                    <Row>
                        <Col>
                  <Memberships />
                        </Col>
                        <Col>
                        <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default UserProfile
