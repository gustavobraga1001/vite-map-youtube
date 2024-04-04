import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import './MapPage.css';
import React, { useEffect, useState } from 'react';
import imgVan from '../../assets/iconeMovel.svg'
import { stylesMaps } from './StyleMaps';

const center = {
  lat: -23.62178148779765,
  lng: -46.56528250493589,
};

const MapPage = () => {
  const [waypoints, setWaypoints] = useState<Array<{ lat: number; lng: number }>>([]);
  const [map, setMap] = React.useState<google.maps.Map>();
  const [origin, setOrigin] = React.useState<google.maps.LatLngLiteral | null>(
    null
  );
  const [destination, setDestination] =
    React.useState<google.maps.LatLngLiteral | null>(null);

  const [response, setResponse] =
    React.useState<google.maps.DistanceMatrixResponse | null>(null);

  const onMapLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  useEffect(() => {
    setOrigin({ lat: -23.625046561701133, lng: -46.52039028647473 }); // Nova York, NY
    setDestination({ lat:-23.618485377185664, lng:-46.57856412063509 }); // Los Angeles, CA
    setWaypoints([
      { lat:-23.634274926423352, lng:-46.526985241377645 }, // San Francisco, CA
      { lat:-23.636358643864003, lng:-46.54355056389266 } // Fresno, CA
    ]);
  }, []);


  const directionsServiceoptions =
    // @ts-ignore
    React.useMemo<google.maps.DirectionsRequest>(() => {
      return {
        origin,
        destination,
        waypoints: waypoints.map(point => ({ location: point })),
        travelMode: 'DRIVING',
      };
    }, [origin, destination]);

  const directionsCallback = React.useCallback((res: any) => {
    if (res !== null && res.status === 'OK') {
      setResponse(res);
    } else {
      console.log(res);
    }
  }, []);

  const directionsRendererOptions = React.useMemo<any | null>(() => {
    return {
      directions: response,
    };
  }, [response]);

  function myFunction() {
    map?.panTo(waypoints[0]);
  }

  return (
    <div className="map">
      <LoadScript
        googleMapsApiKey={import.meta.env.VITE_CHAVE_API}
        libraries={['places']}
      >
        <GoogleMap
          onLoad={onMapLoad}
          center={center}
          zoom={16}
          options={{
            zoomControl: false,
            fullscreenControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            scaleControl: true,
            styles: stylesMaps
          }}
          mapContainerStyle={{ width: '100%', height: '100%' }}
        >
          <button className="button-maps" onClick={myFunction}>
            .
          </button>
 
          <Marker position={{lat:-23.627367263149733, lng:-46.519162653963555}} icon={{
            url: imgVan,
          }} />


          {origin && destination && (
            <DirectionsService
              options={directionsServiceoptions}
              callback={directionsCallback}
            />
          )}

          {response && directionsRendererOptions && (
            <DirectionsRenderer options={directionsRendererOptions} />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapPage;
