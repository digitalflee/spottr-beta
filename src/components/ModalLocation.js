import React, { Component } from 'react'
import {Modal, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import GymMainPage from './GymMainPage'

export class ModalLocation extends React.Component {

    state = {
        viewMore: false,
        locationData: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/locations/${this.props.coordinate}`)
        .then(r => r.json())
        .then((data) => {
            this.setState({
                locationData: data
            })
        })
    }


    render() {
       console.log(this.props.coordinate)
       console.log(this.state.locationData)
        return (
            <div>      
                <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>{this.state.locationData.name}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
                <p>{this.state.locationData.address}</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="dark">Close</Button>
  </Modal.Footer>
</Modal.Dialog>

    <div key={this.props.coordinate}>
    <Link to={`/more-info/${this.props.coordinate}`}>View More Info</Link>
    </div>
                 
            </div>
        )
    }
}

export default ModalLocation
