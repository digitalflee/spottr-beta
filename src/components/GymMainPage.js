import React, { Component } from 'react'
import { Card, Image } from 'react-bootstrap'

export class GymMainPage extends Component {



    render() {
        console.log(this.props.gym)
        return (
            <div>
                <Card style={{ width: '18rem' }}>
  <Card.Body>
        <Card.Title>{this.props.gym.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{this.props.gym.location.address1}</Card.Subtitle>
    <Card.Text> Available Wellness Services
        {this.props.gym.categories.map(category => <li>{category.alias}</li>)}
    </Card.Text>
    <Card.Link href="#">{this.props.gym.display_phone}</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
    <Image src={this.props.gym.image_url}/>
            </div>
        )
    }
}

export default GymMainPage
