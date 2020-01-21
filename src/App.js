
import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Landing from './Landing'
import Map from './components/Map'
import Error from './components/Error'
import UserProfile from './components/UserProfile'
import GymMainPage from './components/GymMainPage'
import Navvy from './components/Navvy'
import GymPostFetch from './components/GymPostFetch'
import MoreInfoPage from './components/MoreInfoPage'



export class App extends Component {

  state = {
    gyms: []
  }


  render() {
  
    return (
      <div>
       
          <Navvy /> 
        <Switch>
        <Route path="/" exact component={ Landing }/>
        <Route 
        path="/gym-map" 
        component={Map}
        /> 
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/gym-main-page/:id" component={GymMainPage} />
        <Route path="/more-info/:id" component={MoreInfoPage} />
        <Route path="/gym-logo-index" component={GymPostFetch} />
        <Route component={Error}/>
        </Switch>
      </div>
    )
  }
}

export default App

