import React, { Component } from 'react'
import {Container, Row, Col, Button, Image, Card} from 'react-bootstrap'
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
                               <Card className="bg-dark text-white">
                                <Card.Img src="https://cdn.thegentlemansjournal.com/wp-content/uploads/2018/10/BXR-BoxingGym-HD-Copie-en-conflit-de-gilles-bonugli-2017-01-19-1296x864-c-center.jpg" alt="Card image" fluid />
                                <Card.ImgOverlay>
                                    <Card.Title>PICK THE FIRST GOAL YOU WOULD LIKE TO ACHIEVE</Card.Title> 
                                    
                                    <Link to="/strength-exercises" style={{color: 'white', padding: 10}}> <strong>Build Strength</strong>
                                    </Link>
                                    <Link to="/endurance-exercises" style={{color: 'white', padding: 10}}> <strong>Build Endurance</strong>
                                    </Link>
                                </Card.ImgOverlay>
                                </Card>
            </div>
           
           )
        }
    }
    
    export default ExercisesIndex
    
{/* <h1>PICK THE FIRST GOAL YOU WOULD LIKE TO ACHIEVE</h1>
<Image src="https://cdn.thegentlemansjournal.com/wp-content/uploads/2018/10/BXR-BoxingGym-HD-Copie-en-conflit-de-gilles-bonugli-2017-01-19-1296x864-c-center.jpg" /> */}