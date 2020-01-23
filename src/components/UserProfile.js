import React, { Component } from 'react'
import {Nav, Row, Col, Container, Image, Card, CardGroup, Button} from 'react-bootstrap'
import Memberships from './Memberships'

export class UserProfile extends Component {

    render() {

        return (
            <div>
                <Nav className="justify-content-center" activeKey="/home">
                   <h1><strong>KEN</strong></h1> 
                    </Nav>
                        <Row>
                            <Col></Col>
                            <Col xs={13}><Image src={require('../assets/3d/k-balenciaga.jpg')} roundedCircle thumbnail/></Col>
                            <Col></Col>
                        </Row>
                        <br/>
                        <Container>
                            <h2>profile pics</h2>
                        </Container>

                <Container >
     
                    <Row>
                    
                        <Col>
                        <br/>
                        <CardGroup>
                            <Card>
                                <Card.Img variant="top" src={require('../assets/3d/ken-cycle-2.gif')} />
                                <Card.Body>
                                <Card.Title>Burning off this Turkey Stuffing.</Card.Title>
                                
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">November 29th, 2019</small>
                                </Card.Footer>
                            </Card>
                            
                            <Card>
                                <Card.Img variant="top" src={require('../assets/3d/ken-handstand.jpg')} />
                                <Card.Body>
                                <Card.Title>Attempting to push the Earth further from the Sun.</Card.Title>
                                
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">2 days ago</small>
                                </Card.Footer>
                            </Card>
                            
                            <Card>
                                <Card.Img variant="top" src={require('../assets/3d/ken-pushups-01.gif')} />
                                <Card.Body>
                                <Card.Title>Another Session in the Hyperbolic Time Chamber</Card.Title>
                               
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">1 lifetime ago</small>
                                </Card.Footer>
                            </Card>
                            <Container>
                            <h1>View Memberships</h1>
                            </Container>
                                     <Col>
                                        <Memberships />
                                    </Col>
                            </CardGroup>
                         </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default UserProfile
