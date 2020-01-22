import React, { Component } from 'react'
import { Container, Button } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

export class GymMembershipPage extends React.Component {

    state = {
        gymMembership: []
    }
    
    componentDidMount(){
    let slug = this.props.match.params.id
    fetch(`http://localhost:3000/locations/${slug}` )
    .then(r => r.json())
    .then((membership) => {
       this.setState({
           gymMembership: membership
       })
    })
    }

    render() {
        return (
            <div>
     <Container>
      <h1> {this.state.gymMembership.name}</h1> 
      <h1> {this.state.gymMembership.address}</h1> 
        <Button variant='dark' onClick={() => {
            fetch(`http://localhost:3000/memberships/${this.props.match.params.id}`, {
              method:'DELETE',
            })
            .then(() => <Redirect to="/user-profile" />)
        }}>
            Delete</Button>
     </Container>
            </div>
        )
    }
}

export default GymMembershipPage
