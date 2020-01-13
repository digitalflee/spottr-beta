import React, { Component } from 'react'
import {Nav, Row, Col, Container, Card, Button, Image} from 'react-bootstrap'

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
                        <Image src="https://pbs.twimg.com/profile_images/985546370231742464/e4kGQkj2_400x400.jpg" roundedCircle />
                        </Col>
                    </Row>
                </Container>
                <br/>
                <Container >
                <Row>
                    <Col>
                    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Image</Card.Title>
    <Card.Text>
      Some quick example text to build on the Image and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card>
                    </Col>
                    <Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Image</Card.Title>
    <Card.Text>
      Some quick example text to build on the Image and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card></Col>
                    <Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Image</Card.Title>
    <Card.Text>
      Some quick example text to build on the Image and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card></Col>
                </Row>
                <Row>
                    <Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Image</Card.Title>
    <Card.Text>
      Some quick example text to build on the Image and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card></Col>
                    <Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Image</Card.Title>
    <Card.Text>
      Some quick example text to build on the Image and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card></Col>
                    <Col><Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Image</Card.Title>
    <Card.Text>
      Some quick example text to build on the Image and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card></Col>
                </Row>
                <Row>
                        <Button variant="dark">Upload Image</Button>
                </Row>
                </Container>
            </div>
        )
    }
}

export default UserProfile
