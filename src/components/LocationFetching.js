import React, {useState, useEffect} from 'react'
import {Marker} from 'react-google-maps'
import axios from 'axios'
import {Modal, Button, Image, Container} from 'react-bootstrap'
import { render } from '@testing-library/react'
import GymMainPage from './GymMainPage'

function LocationFetching() {

    const [gyms, setGyms] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/businesses`)
        .then( res => {
           setGyms(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })

    return (
        <div>
            <ul>
                {
                    gyms.map(gym => <Marker key={gym.id} position={{lat: gym.coordinates.latitude, lng: gym.coordinates.longitude}} onClick={() => {
                        render (
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>{gym.name}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                        <p>{gym.location.address1}</p>
                        </Modal.Body>

                     <Modal.Footer>
                        <Button variant="secondary" onClick={() => console.log('closing')}>Close</Button>
                        <Button variant="primary" onClick={() => {
                            render(
                        <GymMainPage gym={gym}/>
                            )
                    }}>
                            View More Info
                            </Button>
                    </Modal.Footer>
                </Modal.Dialog>
     ) }}/>)
                }
            </ul>
        </div>
    )
}

export default LocationFetching
