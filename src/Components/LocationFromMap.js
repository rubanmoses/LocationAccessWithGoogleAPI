import React, { Component } from 'react'
import {geolocated} from 'react-geolocated'
import Geocode from 'react-geocode'
// import axios from 'axios'

class LocationFromMap extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Mylong:'12.9581056',
             mylat:'77.6421376',
             myAddress:''
        }
    }
    
    componentDidMount() {
        console.log("HI")
        
        Geocode.setApiKey("AIzaSyC2fgI8v3-pjcX-Mz-pNw-SjuhA-D1Cjq8")
        Geocode.fromLatLng("13.0562431", "77.4915699").then(
        response => {
          const address = response.results[0].formatted_address
          console.log(address)
        },
        error => {
          console.error(error)
        }
      )

    }
    onPress=(props)=>{
        // debugger
        Geocode.setApiKey("AIzaSyC2fgI8v3-pjcX-Mz-pNw-SjuhA-D1Cjq8")
        // console.log("vvvv")
        Geocode.fromLatLng(props.coords.latitude,props.coords.longitude).then(
        response => {
          const address = response.results[0].formatted_address
          this.setState({myAddress:address})
          console.log(address)
        },
        error => {
          console.error(error)
        }
      )
    }
    // Geocode.setApiKey("AIzaSyC2fgI8v3-pjcX-Mz-pNw-SjuhA-D1Cjq8")
    // Geocode.enableDebug()
    // Geocode.fromLatLng("48.8583701", "2.2922926").then(
    //     response => {
    //       const address: response.results[0].formatted_address
    //       console.log(address)
    //     },
    //     error => {
    //       console.error(error)
    //     }
    //   )
    // fetch('https://maps.googleapis.com/maps/api/geocode/json?address=12.9581056,77.6421376&key=AIzaSyC2fgI8v3-pjcX-Mz-pNw-SjuhA-D1Cjq8')
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //         console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson));
    // })

    render() {
        return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? <table>
              <h2>Your Location is ----</h2>
            <tbody>
              <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
              {/* {this.setState({ 
                  mylat: this.props.coords.latitude,
                  Mylong: this.props.coords.longitude
              })} */}
              <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
              <tr><td><button onClick={()=>this.onPress(this.props)}>Click me for address</button></td></tr>
            </tbody>
            <h3>Address is --- {this.state.myAddress}</h3>
          </table>
          : <div>Getting the location data&hellip; </div>
          
    }
}

export default geolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  })(LocationFromMap);
