import React, { Component } from 'react'
import {Row, Col, Card, Container} from 'react-bootstrap'


export class GymPostFetch extends Component {

    state = {
        postgyms: [],
        gymLocations: []
    }
    
    componentDidMount(){
   fetch(`http://localhost:3000/gyms`)
   .then(r => r.json())
   .then((gymLogos) => {
       this.setState({
           postgyms: gymLogos 
       })
   })
   fetch(`http://localhost:3000/locations`)
   .then(r => r.json())
   .then((locations) => {
    this.setState({
        gymLocations: locations
    })  
   })
}




render() {
    
        return (
            <div>  
                <Container>
                    <Row>
                {this.state.postgyms.map(gym => 
                <Col>
                  <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={gym.logo} />
                  <Card.Body>
                    <Card.Text>
                      
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Col>
                )
                }
                </Row>

                <div>
            {this.state.gymLocations.map(loc => <li>{loc.address}</li>)}
                </div>
                    </Container>   
            
            </div>
        )
    }
}

export default GymPostFetch
