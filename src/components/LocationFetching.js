import React, {useState, useEffect} from 'react'
import {Marker} from 'react-google-maps'
import axios from 'axios'
import {CardColumns, Button, Modal, Card, Row} from 'react-bootstrap'
import { render } from '@testing-library/react'
import GymMainPage from './GymMainPage'


function LocationFetching() {

    const [gyms, setGyms] = useState([])
    const [hidden, setHidden] = useState({hide: true})
    const [showingInfo, setShowingInfo] = useState({show: false})
    const [showingModal, setModal] = useState({showing: false})

   


    useEffect(() => {
        axios.get(`http://localhost:3000/businesses`)
        .then( res => {
           setGyms(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    
    
    return (
        <div>
            <ul>
                {
                gyms.map(gym => <Marker key={gym.id} position={{lat: gym.coordinates.latitude, lng: gym.coordinates.longitude}} onClick={() => console.log(gym.name)} />)
            }
            </ul>
            <Row>
            <CardColumns>
            {
            gyms.map(gym => <Card>
                <Card.Body>
                    {gym.name}
                </Card.Body>
                <Button variant="dark" onClick={() => 
                        {
                        
                        render (
                        <Modal.Dialog>
                        <Modal.Header closeButton>
                          <Modal.Title>Modal Title</Modal.Title>
                        </Modal.Header>
                      
                        <Modal.Body>
                          <p>Modal body text goes here.</p>
                        </Modal.Body>
                      
                        <Modal.Footer>
                          <Button variant="secondary">Close</Button>
                          <Button variant="primary">Save changes</Button>
                        </Modal.Footer>
                      </Modal.Dialog>
                        ) 
                    }
                    }>
                    View Location</Button>
                </Card>
                
            )
        }
            </CardColumns>
            </Row>
        </div>
    )
}

export default LocationFetching

//      render (
//  <Modal.Dialog>
//      <Modal.Header closeButton>
//          <Modal.Title>{gym.name}</Modal.Title>
//      </Modal.Header>

//      <Modal.Body>
//      <p>{gym.location.address1}</p>
//      </Modal.Body>

//   <Modal.Footer>
//      <Button variant="secondary" onClick={() => setHidden({hide: true}) }>Close</Button>
//      <Button variant="primary" onClick={() => 
//      render (
//      <GymMainPage gym={gym}/>
//      )
//  }>
//          View More Info
//          </Button>
//  </Modal.Footer>
// </Modal.Dialog>