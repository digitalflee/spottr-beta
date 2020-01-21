import React, { Component } from 'react'
import {Nav, Row, Col, Container, Image, Card, Button} from 'react-bootstrap'
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
                  <Memberships />

                

                </Container>
            </div>
        )
    }
}

export default UserProfile
