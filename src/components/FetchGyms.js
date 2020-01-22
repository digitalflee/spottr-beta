import React, { Component } from 'react'
import {Marker} from 'react-google-maps'
import {CardColumns, Button, Card, Row, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { render } from '@testing-library/react'
import ModalLocation from './ModalLocation'




export class FetchGyms extends React.Component {
    
    state = {
        locations: [],
        coords: [],
        routeSlug: '',
        locationClicked: false,
        clickedCoord: ''
    }
    
    componentDidMount(){
        fetch(`http://localhost:3000/coordinates`)
        .then(r => r.json())
        .then((gymData) => {
            this.setState({
                coords: gymData
            })
        })

        fetch(`http://localhost:3000/locations`)
        .then(r => r.json())
        .then((gymData) => {
            this.setState({
                locations: gymData
            })
        })
    }
   
    handleLoClick = (event, coordinate) => {
        console.log(coordinate.id)
        return <Link to={`/gym-main-page/${coordinate.id}`}></Link>
        
    }
    
    
    
    render() {
        console.log(this.state.locations)
        return (
            
            <div>
               <ul>
                {
               this.state.coords.map(coordinate => <Marker onClick={
                  () => this.setState({
                       routeSlug: coordinate.id,
                       locationClicked: true, 
                    clickedCoord: coordinate.id})}    
               key={coordinate.id} position={{lat: parseFloat(coordinate.latitude) , lng: parseFloat(coordinate.longitude) }} />) 
            }
            <Container>
            {this.state.locationClicked ? <ModalLocation coordinate={this.state.clickedCoord} locationClicked={this.state.locationClicked}/> : null}
            </Container>
            </ul>
            <Row>
            <CardColumns>
            {
            this.state.locations.map(gym => <Card key={gym.id}>
                <Card.Body>
                    {gym.name}
                </Card.Body>
                
                   <Button variant="dark" onClick={() =>
                       fetch(`http://localhost:3000/memberships`, {
                         method:'POST',
                        headers: { 
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: gym.name,
                            address: gym.address,
                            zipcode: gym.zipcode,
                            user_id: 1
                        
                         })
                       })
                       .then(r => r.json())
                        .then(console.log)
                   }>
                       Add To Memberships</Button>
                      <Link to={`/more-info/${gym.id}`} style={{color: 'black'}}>View Location</Link>
                </Card>
                )
                
            
        }
            </CardColumns>
            </Row> 
            
            </div>
           
        )
    }
}

export default FetchGyms




                // <Card>
                // <Card.Body>
                //     {gym.name}
                // </Card.Body>
                // <Link to={`/gym-main-page/${gym.id}`}>
                //     View Location</Link>
                // </Card>