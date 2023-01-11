import React, { useState } from 'react';
import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
} from 'react-map-gl';

const ReactMap = () => {
  const [longitude, setLongitude] = useState(-70.642578);
  const [latitude, setLatitude] = useState(-33.50706);

  return (
    <div>
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          longitude,
          latitude,
        }}
        mapStyle={'mapbox://styles/mapbox/streets-v11'}
        zoom={15}
        style={{
          width: '590px',
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
