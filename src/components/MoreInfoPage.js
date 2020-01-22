import React, { Component } from 'react'
import {Container, Image, Row, Col} from 'react-bootstrap'
import YouTube from 'react-youtube'

export class MoreInfoPage extends Component {

    state = {
        location: [],
        images: [],
        reviews: []
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
        fetch(`http://localhost:3000/images/${locSlug}`)
        .then(r => r.json())
        .then((imageData) => {
            this.setState({
                images: imageData
            })
        })
        fetch(`http://localhost:3000/reviews/`)
        .then(r => r.json())
        .then((reviewData) => {
            this.setState({
                reviews: reviewData
            })
        })
        
    }
    
    render() {
        console.log(this.state.reviews)
        return (
            <div>
                 <Container>
                     <Row>
                        <Col>
            <h1>{this.state.location.name}</h1>
                        </Col>
                     </Row>
                     <Row>
                        <Col>
            <h3>{this.state.location.address}</h3>
                        </Col>
                        </Row>
            <Container>
                <Row className="justify-content-md-center">
                <Col sm={8}>
                    <Image src={this.state.images.image_url} alt='image here' width={800} height={600} rounded/>
                </Col>
                </Row>
            </Container>
            <h3>Gym Reviews</h3>
            <div>
                {this.state.reviews.map(rev => <div key={rev.id}><li>{rev.review_content}</li><br/></div>)}
            </div>
                </Container>
            </div>
        )
    }
}

export default MoreInfoPage
