import React, { useState } from 'react';
import Link from 'next/link';
import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
} from 'react-map-gl';

/** Bootstrap components */
import Button from 'react-bootstrap/Button';
import { icons } from '../../components/Icons';
import styles from '../../../styles/components/propiedades/details/Maps.module.css';

const ReactMap = ({ longitudeProp, latitudeProp }) => {
  const [longitude, setLongitude] = useState(longitudeProp);
  const [latitude, setLatitude] = useState(latitudeProp);
  const { BiMap } = icons;

  return (
    <div className={styles.mapContainer}>
      <div className={styles.mapTopInfoContainer}>
        <Button className={styles.showMapBtn}>Ver Mapa</Button>
        <div>
          <div className={styles.mapTopInfoAddress}>
            <span className={styles.spanIcon}>
              <BiMap />
            </span>
            <span>descripción</span>
          </div>
          <Link href="/" className={styles.showAreaInfo}>
            Ver información de la zona
          </Link>
        </div>
      </div>
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          longitude,
          latitude,
          zoom: 14,
          pitch: 45,
          bearing: 0,
          width: 'auto',
          height: 300,
        }}
        mapStyle={'mapbox://styles/mapbox/streets-v11'}
        style={{
          width: 'auto',
          height: '300px',
          borderRadius: '15px',
          padding: '2rem',
          margin: '1.5rem',
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
