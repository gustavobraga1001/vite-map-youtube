import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import './MapPage.css';
import React, { useEffect } from 'react';


const center = {
  lat: -23.62178148779765,
  lng: -46.56528250493589,
};

const MapPage = () => {
  const [map, setMap] = React.useState<google.maps.Map>();
  const [pointA, setPointA] = React.useState<
    google.maps.LatLngLiteral | google.maps.LatLng 
  >();
  const [pointB, setPointB] = React.useState<google.maps.LatLngLiteral>();
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
    console.log()
    setPointA({ lat: -23.617726193676745, lng: -46.578941201123854 });
    setPointB({ lat: -23.625046561701133, lng: -46.52039028647473 });
    setOrigin({ lat: -23.617726193676745, lng: -46.578941201123854 });
    setDestination({ lat: -23.625046561701133, lng: -46.52039028647473 });
  }, []);

  const directionsServiceoptions =
    // @ts-ignore
    React.useMemo<google.maps.DirectionsRequest>(() => {
      return {
        origin,
        destination,
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
    map?.panTo(center);
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
            styles: [
              {
                elementType: 'labels',
                featureType: 'all',
                stylers: [{ visibility: 'off' }],
              },
            ],
          }}
          mapContainerStyle={{ width: '100%', height: '90%' }}
        >
          <button className="button" onClick={myFunction}>
            .
          </button>
          {!response && pointA && <Marker position={pointA} />}
          {!response && pointB && <Marker position={pointB} />}

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
