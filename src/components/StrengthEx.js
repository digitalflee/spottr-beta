import React, { Component } from 'react'
import {CardDeck, Card, Container} from 'react-bootstrap'

export class StrengthEx extends Component {
    render() {
        return (
            <Container>
                <h1>STRENGTH EXERCISES</h1>
                <h3>pick a minimum 4 exercises to perform within the suggested rep range</h3>
                <h5>check suggestions for more info</h5>
                
            <div>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={require('../assets/exercises/bench-press.gif')} />
                    <Card.Body>
                    <Card.Title>Suggestion</Card.Title>
                    <Card.Text>
                        Perform this exercise for 4 sets at 10 reps.  Your last rep should feel like you can barely do one more. Rest for up to 1 minute between sets.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require('../assets/exercises/deadlift.gif')} />
                    <Card.Body>
                    <Card.Title>Suggestion</Card.Title>
                    <Card.Text>
                         Perform this exercise for 4 sets at 5 reps.  For safety purposes your last rep should feel like you have two more in you. Rest for up to 2 minutes between sets.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require('../assets/exercises/shoulder-press.gif')} />
                    <Card.Body>
                    <Card.Title>Suggestion</Card.Title>
                    <Card.Text>
                        Perform this exercise for 4 sets at 10 reps.  Your last rep should feel like you can barely do one more. Rest for up to 1 minute between sets.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={require('../assets/exercises/handstand-pushup.gif')} />
                    <Card.Body>
                    <Card.Title>Suggestion</Card.Title>
                    <Card.Text>
                        Perform this exercise for 4 sets for as many reps as possible. Rest for 1 minute in between sets. 
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require('../assets/exercises/overhead-squat.gif')} />
                    <Card.Body>
                    <Card.Title>Suggestion</Card.Title>
                    <Card.Text>
                        Perform this exercise for 4 sets at 8 reps.  Use a moderate amount of weight, for safety purposes your last rep should feel like you have two more in you. 1 minute rest. 
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require('../assets/exercises/front-squat.gif')} />
                    <Card.Body>
                    <Card.Title>Suggestion</Card.Title>
                    <Card.Text>
                    Perform this exercise for 4 sets at 10 reps.  Your last rep should feel like you can barely do one more. Rest for up to 1 minute between sets.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardDeck>
                <CardDeck>
                <Card>
                    <Card.Img variant="top" src={require('../assets/exercises/hollow-back-press.gif')} />
                    <Card.Body>
                    <Card.Title>Suggestion</Card.Title>
                    <Card.Text>
                    Perform this exercise for 3 sets at 5 reps.  Rest 30 seconds between each set. 
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require('../assets/exercises/ring-dip.gif')} />
                    <Card.Body>
                    <Card.Title>Suggestion</Card.Title>
                    <Card.Text>
                        Perform this exercise for as many reps as possible for 4 sets.  Rest 1 minute in between sets.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={require('../assets/exercises/bar-muscleup.gif')} />
                    <Card.Body>
                    <Card.Title>Suggestion</Card.Title>
                    <Card.Text>
                        Perform this exercise for as many reps as possible for 3 sets.  Rest 1 minute in between sets.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardDeck>
            </div>
            </Container>
        )
    }
}

export default StrengthEx
