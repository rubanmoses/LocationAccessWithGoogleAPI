import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMaps extends Component {
    static defaultProps = {
        center: {
          lat: 12.9581056,
          lng: 77.6421376
        },
        zoom: 11
      }
    render() {
    //     Mylati:'12.9581056',
    // mylat:'77.6421376',
        return (
            <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC2fgI8v3-pjcX-Mz-pNw-SjuhA-D1Cjq8" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <AnyReactComponent
            lat={77.6421376}
            lng={12.9581056}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
        )
    }
}

export default GoogleMaps
