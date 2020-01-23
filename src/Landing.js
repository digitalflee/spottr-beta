import React, { Component } from 'react'
import Navvy from './components/Navvy'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import { Button } from 'react-bootstrap'
import {Card} from 'react-bootstrap'


export class Landing extends Component {
    render() {
        return (
            <div>
                {/* <Navvy /> */}
                <Card className="bg-dark text-white">
  <Card.Img src={require(`./assets/3d/spottr-landing-02.gif`)} alt="Card image" fluid />
  <Card.ImgOverlay>
    <Card.Title>YOUR FITNESS ASSISTANT</Card.Title>
      <Button variant='light'>

    <Link className='button' to="/user-profile">Enter</Link>
      </Button>
        
  </Card.ImgOverlay>
</Card>
               </div>
        )
    }
}

export default Landing

// "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rise-gym-wework046-hdr-edit-full-res-copy-1549045104.jpg"