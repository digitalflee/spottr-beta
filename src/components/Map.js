import React, { useState, useEffect } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps'
import {Marker} from 'react-google-maps'
import FetchGyms from './FetchGyms'
import Navvy from './Navvy'



const Map = (props) => {
  
  console.log(props)
//console.log(gymData.map(gym => gym.coordinates.latitude))
  return (
    
    <GoogleMap 
    defaultZoom={13}
    defaultCenter={{ lat: 40.7128, lng: -74.0060 }}
    >
          <Marker position={{lat: 40.6925, lng: -73.99141}} />
          {/* {gymData.businesses.map(gym => (
            
            <Marker key={gym.id} postion={{lat: gym.coordinates.latitude, lng: gym.coordinates.longitude }}/>
          ))} */}
          <FetchGyms />
        </GoogleMap>
        
        )
      }
      
      const WrappedMap = withScriptjs(withGoogleMap(Map))
      
      export default function App() {
        
        return <div style={{width: '100vw', height: '100vh'}}>
  
      
      <WrappedMap 
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`} 
      loadingElement={<div style={{ height: '100%'}} />}
      containerElement={<div style={{ height: '100%'}} />}
      mapElement={<div style={{ height: '100%'}} />}
  
      />
    </div>
  }
  

 
  