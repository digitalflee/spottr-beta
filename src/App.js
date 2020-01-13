
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from './Landing'
import Map from './components/Map'
import Error from './components/Error'
import UserProfile from './components/UserProfile'

let token = `VjbnNFX5bH9MssRF06uBDC5mSnLcv-N_VRQ2lrSfygirv49iHr1kRMcZ7ycyRqvnSze0nd6WnMF24uYyKA51moLiMdAd_cFqiQfaec_4ge0eeDFSbtF1d4Q0ztwYXnYx`


export class App extends Component {

  state = {
    gyms: []
  }

  // componentDidMount(){
  //  fetch(`http://localhost:3000/businesses`)
  //  .then(r => r.json())
  //  .then((gymData) => {
  //    this.setState({
  //      gyms: gymData
  //     })
  //   })
  // }

  
  render() {
    
    
    return (
      <div>
        <Switch>
        <Route path="/" exact component={ Landing }/>
        <Route 
        path="/gym-map" 
        component={Map}
        /> 
        <Route path="/user-profile" component={UserProfile} />
        <Route component={Error}/>
        </Switch>
      </div>
    )
  }
}

export default App

