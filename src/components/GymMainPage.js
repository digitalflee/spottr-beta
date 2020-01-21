import React, { Component } from 'react'
import { Container, Image } from 'react-bootstrap'

export class GymMainPage extends React.Component {

    state = {
        gymName: ''
    }
    
    componentDidMount(){
    let slug = this.props.match.params.id
    fetch(`http://localhost:3000/memberships/${slug}` )
    .then(r => r.json())
    .then((membership) => {
       this.setState({
           gymName: membership.name
       })
    })
    }

    render() {
       
        return (
            <div>
     <Container>
        <h1>{this.state.gymName}</h1>
            <h3>Gym Details</h3>
            <h3>Gym Images</h3>
            <h3>Gym Reviews</h3>
     </Container>
            </div>
        )
    }
}

export default GymMainPage
