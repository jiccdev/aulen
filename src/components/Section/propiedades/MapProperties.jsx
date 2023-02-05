import React, { useState, useContext, useEffect } from 'react';
import PropertiesContext from '../../../context/properties/PropertiesContext';
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
import { icons } from '../../../components/Icons';
import styles from '../../../../styles/components/propiedades/details/Maps.module.css';

const MapProperties = () => {
  const { newProperties, getProperties } = useContext(PropertiesContext);
  const [showPopup, setShowPopup] = useState(true);
  const [key, setKey] = useState('transportationTab');

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <div
      style={{
        height: 'auto',
        width: '100%',
        marginTop: '150px',
      }}
    >
      <div className={styles.mapContainer}>
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          initialViewState={{
            // longitude,
            // latitude,
            zoom: 14,
            pitch: 45,
            // bearing: 0,
            // width: 'auto',
            // height: 300,

            // esto si funciona
            longitude: -70.64827,
            latitude: -33.45694,
            zoom: 3.5,
          }}
          mapStyle={'mapbox://styles/mapbox/streets-v11'}
          style={{
            width: 'auto',
            height: '80vh',
            borderRadius: '15px',
            padding: '2rem',
            margin: '1.5rem',
          }}
        >
          {newProperties?.map((property) => {
            let longitude =
              Number(property?.LngLat?.match(/Lng: ([-\d.]+)/)[1]) || -70.64827;
            let latitude =
              Number(property?.LngLat?.match(/Lat: ([-\d.]+)/)[1]) || -33.45694;
            console.log('longitude_', longitude);
            console.log('longitude_', latitude);

            return (
              <Marker
                key={property?.id}
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
                    onClose={() => setShowPopup(false)}
                    style={{
                      width: 'auto',
                      height: '10px',
                      borderRadius: '10px',
                      padding: '1rem',
                      margin: '1rem',
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={property?.image || '/images/placeholder.png'}
                      style={{
                        width: '100%',
                        height: '100px',
                        objectFit: 'cover',
                        borderRadius: '10px',
                      }}
                    />
                    <p>{property?.title || 'sin descripción'}</p>
                    <span
                      style={{
                        fontWeight: 'bold',
                      }}
                    >
                      {property?.address || ''}, {property?.city || ''}
                    </span>
                  </Popup>
                )}
              </Marker>
            );
          })}

          <NavigationControl />
          <GeolocateControl />
          <FullscreenControl />
        </Map>
      </div>
    </div>
  );
};

export default MapProperties;
