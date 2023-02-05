import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  FullscreenControl,
  Popup,
} from 'react-map-gl';

/** Bootstrap components */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { icons } from '../../components/Icons';
import styles from '../../../styles/components/propiedades/details/Maps.module.css';

const ReactMap = ({ longitudeProp, latitudeProp, propertyData }) => {
  const [longitude, setLongitude] = useState(longitudeProp);
  const [latitude, setLatitude] = useState(latitudeProp);
  const [showPopup, setShowPopup] = useState(true);
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
            <span>
              {propertyData?.address || ''} {propertyData?.city || ''}
            </span>
          </div>
          <Link href="/" className={styles.showAreaInfo}>
            Ver información de la zona
          </Link>
        </div>
      </div>
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          // longitude,
          // latitude,
          // zoom: 14,
          // pitch: 45,
          // bearing: 0,
          // width: 'auto',
          // height: 300,

          longitude: longitude,
          latitude: latitude,
          zoom: 3.5,
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
        >
          {showPopup && (
            <Popup
              longitude={longitude}
              latitude={latitude}
              // onClose={() => setShowPopup(false)}
              style={{
                width: 'auto',
                height: '60px',
                borderRadius: '10px',
                padding: '1rem',
                margin: '1rem',
              }}
            >
              <Card.Img
                variant="top"
                src={propertyData?.images?.[0]}
                style={{
                  width: '100%',
                  height: '100px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
              <p>{propertyData?.title || 'sin descripción'}</p>
              <span
                style={{
                  fontWeight: 'bold',
                }}
              >
                {propertyData?.address || ''}, {propertyData?.city || ''}
              </span>
            </Popup>
          )}
        </Marker>

        <NavigationControl />
        <GeolocateControl />
        <FullscreenControl />
      </Map>
    </div>
  );
};

export default ReactMap;
