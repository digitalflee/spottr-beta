import React, { Component } from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import {Card, Button, Container} from 'react-bootstrap'
import GymMainPage from './GymMainPage'
import { render } from 'react-dom'

export class Memberships extends Component {

    state = {
        memberships: [],
        
    }

    componentDidMount(){
        fetch(`http://localhost:3000/memberships`)
        .then(r => r.json())
        .then((membershipData) => {
            this.setState({
                memberships: membershipData
            })
        })
    }


    render() {
        console.log(this.state.memberships)
        return (
            
                this.state.memberships.map(membership => <div key={membership.id}>
                    <Link  to={`/gym-main-page/${membership.id}`}>view: {membership.name} </Link>
                    </div>)
        
        )
    }
}


export default Memberships

