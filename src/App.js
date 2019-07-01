import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LocationApp from './Components/LocationFromMap'
// import GeoLocation from './Components/GeolocationExample'
import LocFromMap from './Components/LocationFromMap'
import GoogleMaps from './Components/GoogleMaps'

class App extends Component {
  render() {
    return (
      <div>
        <LocationApp/>
        {/* <GeoLocation/> */}
        <LocFromMap/>
        <GoogleMaps/>
      </div>
    );
  }
}

export default App;
