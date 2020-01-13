import React, { Component } from 'react'
import Navvy from './components/Navvy'
import Image from 'react-bootstrap/Image'
import { Button } from 'react-bootstrap'
import {Card} from 'react-bootstrap'


export class Landing extends Component {
    render() {
        return (
            <div>
                <Navvy />
                <Card className="bg-dark text-white">
  <Card.Img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rise-gym-wework046-hdr-edit-full-res-copy-1549045104.jpg" alt="Card image" fluid />
  <Card.ImgOverlay>
    <Card.Title>Find Workout Partners In Your Area</Card.Title>
      <Button variant="light" align="center">ENTER</Button>
  </Card.ImgOverlay>
</Card>
               </div>
        )
    }
}

export default Landing

                //  <div align="center"> 
                
                //      <Button variant="dark">ENTER</Button>
                // </div>
                //  <Image src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rise-gym-wework046-hdr-edit-full-res-copy-1549045104.jpg" fluid />