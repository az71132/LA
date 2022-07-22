import { height, margin } from '@mui/system';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
import styled from 'styled-components'



class MapContainer extends Component {
    render() {
        return (

            <Map
                google={this.props.google}
                style={{ width: "100%", height: "90%"}}
                zoom={17}
                initialCenter={{
                    lat: 31.426241876464335,
                    lng: 74.37489552492187
                }}
            >
                
                <Marker  position={{ lat: 31.4261, lng: 74.37489552492187 }} />
            </Map>


        )
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDYwqpUxgT6czToLxa5ZaoFOkj00GOwQws"
})(MapContainer)

