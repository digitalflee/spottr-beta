import React, { Component } from 'react'
import {CardDeck, Card, Container} from 'react-bootstrap'

export class EnduranceEx extends Component {
    render() {
        return (
            <Container>
            <h1>ENDURANCE EXERCISES</h1>
            <h3>pick 5 movements and perform these exercises for time</h3>
            <h5>check suggestions for more info</h5>
            
        <div>
        <CardDeck>
            <Card>
                <Card.Img variant="top" src={require('../assets/exercises/rowing.gif')} />
                <Card.Body>
                <Card.Title>Suggestion</Card.Title>
                <Card.Text>
                    Perform an 800 meter Row as fast as possible or Row for 15 minutes at a steady pace.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={require('../assets/exercises/burpee-box-jump.gif')} />
                <Card.Body>
                <Card.Title>Suggestion</Card.Title>
                <Card.Text>
                    Perform exercise for 5 sets, 30 seconds each set.  30 second rest in between sets.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={require('../assets/exercises/medicine-ball-clean.gif')} />
                <Card.Body>
                <Card.Title>Suggestion</Card.Title>
                <Card.Text>
                    Perform exercise for 4 sets, 30 seconds each set.  30 second rest in between sets.
                </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
        <CardDeck>
            <Card>
                <Card.Img variant="top" src={require('../assets/exercises/air-squat.gif')} />
                <Card.Body>
                <Card.Title>Suggestion</Card.Title>
                <Card.Text>
                    Perform exercise for 4 sets, 30 seconds each set. 30 second rest in between sets.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={require('../assets/exercises/dumbbell-clean.gif')} />
                <Card.Body>
                <Card.Title>Suggestion</Card.Title>
                <Card.Text>
                    Perform exercise with a moderate amount of weight '(75% capacity)' for 4 sets, 30 seconds each set. 30 second rest in between sets.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={require('../assets/exercises/handstand.gif')} />
                <Card.Body>
                <Card.Title>Suggestion</Card.Title>
                <Card.Text>
                    Hold the movement for up to 1 minute. 4 sets and up to 1 minute rest in between sets.
                </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
        <CardDeck>
            <Card>
            <Card.Img variant="top" src={require('../assets/exercises/hanging-L-sit.gif')} />
                <Card.Body>
                <Card.Title>Suggestion</Card.Title>
                <Card.Text>
                    Hold this position for as long as possible, no less than 30 seconds.  4 sets and 30 second rest in between sets. 
                </Card.Text>
                </Card.Body>

            </Card>
            <Card>
            <Card.Img variant="top" src={require('../assets/exercises/push-up.gif')} />
                <Card.Body>
                <Card.Title>Suggestion</Card.Title>
                <Card.Text>
                    Perform this exercise for 3 sets for as many reps as possible in 30 seconds, and rest 30 seconds in between sets. 
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
            <Card.Img variant="top" src={require('../assets/exercises/ring-row.gif')} />
                <Card.Body>
                <Card.Title>Suggestion</Card.Title>
                <Card.Text>
                    Perform this exercise for 4 sets at 30 seconds per set. Rest 30 seconds in between sets. 
                </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
        <CardDeck>
            <Card>
            <Card.Img variant="top" src={require('../assets/exercises/sit-up.gif')} />
                <Card.Body>
                <Card.Title>Suggestion</Card.Title>
                <Card.Text>
                Perform this exercise for 4 sets at 30 seconds per set. Rest 30 seconds in between sets. 
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
            <Card.Img variant="top" src={require('../assets/exercises/walking-lunge.gif')} />
                <Card.Body>
                <Card.Title>Suggestion</Card.Title>
                <Card.Text>
                Perform this exercise for 4 sets at 30 seconds per set. Rest 30 seconds in between sets. 
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
            <Card.Img variant="top" src={require('../assets/exercises/hang-power-snatch.gif')} />
                <Card.Body>
                <Card.Title>Suggestion</Card.Title>
                <Card.Text>
                Perform exercise with a moderate amount of weight '(75% capacity)' for 4 sets, 30 seconds each set. 1 minute rest in between sets.
                </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
        </div>
        </Container>
        )
    }
}

export default EnduranceEx
