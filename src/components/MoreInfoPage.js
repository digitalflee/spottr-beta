import React, { Component } from 'react'
import {Container} from 'react-bootstrap'

export class MoreInfoPage extends Component {

    state = {
        location: []
    }
    
    componentDidMount(){
        let locSlug = this.props.match.params.id
        fetch(`http://localhost:3000/locations/${locSlug}`)
        .then(r => r.json())
        .then((locationData) => {
            this.setState({
                location: locationData
            })
        })
    }
    
    render() {
        console.log(this.state.location)
        return (
            <div>
                 <Container>
            <h1>{this.state.location.name}</h1>
            <h3>{this.state.location.address}</h3>
            <h3>Gym Images</h3>
            <h3>Gym Reviews</h3>
                </Container>
            </div>
        )
    }
}

export default MoreInfoPage
