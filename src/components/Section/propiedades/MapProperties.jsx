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
import Toast from 'react-bootstrap/Toast';
import { icons } from '../../../components/Icons';
import styles from '../../../../styles/components/propiedades/details/Maps.module.css';

const MapProperties = () => {
  const { newProperties, getProperties } = useContext(PropertiesContext);
  const [showPopup, setShowPopup] = useState(true);
  const [propertyDetail, setPropertyDetail] = useState({});
  const [key, setKey] = useState('transportationTab');

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <div
      style={{
        height: 'auto',
        width: '100%',
        marginTop: '125px',
      }}
    >
      <div className={styles.mapContainer}>
        <div className={styles.mainTopInfoContainer}>
          <div className={styles.mapTopInfoContainer}>
            {/* caract y precio */}
            <h2>Localización de Propiedades</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </div>
          <div className={styles.toastContainer}>
            <Toast className={styles.toast}>
              <div>
                <strong className="mx-auto">
                  {propertyDetail?.title || ''}
                </strong>
              </div>
              <Toast.Body className={styles.toastBody}>
                <span>
                  {propertyDetail?.commune}, {propertyDetail?.city}{' '}
                  {propertyDetail?.address || ''}
                </span>
              </Toast.Body>
            </Toast>
          </div>
        </div>
      </div>

      <div className={styles.mapContainer}>
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          initialViewState={{
            pitch: 45,
            width: 400,
            height: 400,
            attributionControl: false,
            longitude: -70.64827,
            latitude: -33.45694,
            zoom: 12,
            style: {
              width: 'auto',
              height: '80vh',
              borderRadius: '15px',
            },
          }}
          mapStyle={'mapbox://styles/mapbox/streets-v12'}
          style={{
            width: 'auto',
            height: '80vh',
            borderRadius: '15px',
          }}
        >
          {newProperties?.map((property) => {
            let longitude =
              Number(property?.LngLat?.match(/Lng: ([-\d.]+)/)[1]) || -70.64827;

            let latitude =
              Number(property?.LngLat?.match(/Lat: ([-\d.]+)/)[1]) || -33.45694;

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
                <div
                  onClick={() => {
                    setPropertyDetail(property);
                    setShowPopup(true);
                  }}
                >
                  {showPopup && (
                    <Popup
                      longitude={longitude}
                      latitude={latitude}
                      onClose={() => setShowPopup(false)}
                      anchor="bottom"
                      closeButton={false}
                      closeOnClick={false}
                      dynamicPosition={true}
                      focusAfterOpen={false}
                      offsetTop={-10}
                      offsetLeft={-10}
                      closeOnMove={false}
                    >
                      <div
                        style={{
                          backgroundColor: 'whitesmoke',
                          padding: '.2rem',
                          borderRadius: '5px',
                        }}
                      >
                        <Card.Img
                          variant="top"
                          src={property?.image || '/images/placeholder.png'}
                          style={{
                            width: '100%',
                            height: '120px',
                            objectFit: 'cover',
                            borderRadius: '5px',
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
                      </div>
                    </Popup>
                  )}
                </div>
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
