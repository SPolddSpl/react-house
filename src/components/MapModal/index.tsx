import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';

const style = {
    width: '100%',
    height: '100%'
}

function MapModal(props: any) {
    return (
        <Map
            google={props.google}
            center={{
                lat: 40.854885,
                lng: -88.081807
            }}
            style={style}
            initialCenter={{ lat: 47.444, lng: -122.176 }}
        />
    );
}

export default GoogleApiWrapper({
    apiKey: `${process.env.REACT_APP_MAP_KEY}`
})(MapModal)