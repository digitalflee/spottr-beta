import React, { Component } from 'react'
import {Link, Switch, Route} from 'react-router-dom'


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
                    <Link  to={`/gym-membership-page/${membership.id}`} style={{color: 'black'}}><strong> {membership.name} </strong></Link>
                    </div>)
        
        )
    }
}


export default Memberships

