import React, { useState } from 'react';
import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
} from 'react-map-gl';

const ReactMap = ({ longitudeProp, latitudeProp }) => {
  const [longitude, setLongitude] = useState(longitudeProp);
  const [latitude, setLatitude] = useState(latitudeProp);

  return (
    <div>
      <div>
        Map top information
      </div>
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          longitude,
          latitude,
          zoom: 14,
          pitch: 45,
          bearing: 0,
          width: 500,
          height: 500,
        }}
        mapStyle={'mapbox://styles/mapbox/streets-v11'}
        style={{
          width: 'auto',
          height: '500px',
          borderRadius: '15px',
        }}
      >
        <Marker
          longitude={longitude}
          latitude={latitude}
          offsetLeft={-20}
          offsetTop={-10}
          style={{
            cursor: 'pointer',
            zIndex: 100,
          }}
        />
        <NavigationControl />
        <GeolocateControl />
        <FullscreenControl />
      </Map>
    </div>
  );
};

export default ReactMap;
