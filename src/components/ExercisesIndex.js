import React, { Component } from 'react'
import {Container, Row, Col, Button, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import StrengthEx from './StrengthEx'
import EnduranceEx from './EnduranceEx'

export class ExercisesIndex extends Component {

    // state = {
    //     strengthClicked: false,
    //     enduranceClicked: false
    // }

    render() {

        return (
            <div>
            <Container fluid>
            <Row>
                <Col></Col>
                <Col md={5}>
                 <h1>PICK THE FIRST GOAL YOU WOULD LIKE TO ACHIEVE</h1>
                 <br/>
                    </Col>
                <Col></Col>
                </Row>
                <div>
                <Row>
                <Col></Col>
                <Col xs={3}>
                   <Link to="/strength-exercises" style={{color: 'black', padding: 10}}> <strong>Build Strength</strong>
                   </Link>
                   
                   <Link to="/endurance-exercises" style={{color: 'black', padding: 10}}> <strong>Build Endurance</strong>
                   </Link>
                    </Col>
                <Col></Col>
                </Row>
                </div>
                <Image src="https://cdn.thegentlemansjournal.com/wp-content/uploads/2018/10/BXR-BoxingGym-HD-Copie-en-conflit-de-gilles-bonugli-2017-01-19-1296x864-c-center.jpg" fluid/>
            </Container>
            </div>
                
        )
    }
}

export default ExercisesIndex
