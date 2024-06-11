import React, { useState } from 'react';
import { Box, styled } from '@mui/material';
import ReactMapGL, { NavigationControl, GeolocateControl, FullscreenControl } from 'react-map-gl';
import MapMarkers from './MapMarkers';
import TruckIcon from '../../../../../../assets/svgs/map/TruckIcon.svg';

const TOKEN = import.meta.env.VITE_APP_MAP_TOKEN;

const MapComponent = ({ mapRef, newPlace, setNewPlace, viewport, setViewport }) => {
  const [hoveredMarker, setHoveredMarker] = useState(null);

  const predefinedCoordinates = () => {
    return [
      { id: 0, longitude: 42.5510, latitude: 29.2985, icon: TruckIcon },
      { id: 1, longitude: -95, latitude: 45, icon: TruckIcon },
      { id: 2, longitude: -90, latitude: 50, icon: TruckIcon },
      { id: 3, longitude: -85, latitude: 55, icon: TruckIcon },
    ];
  };
  const markersArray = predefinedCoordinates();
  const handleAddClick = (e) => {
    setNewPlace({ lat: e.lngLat.lat, lng: e.lngLat.lng });
  };

  return (
    <Box style={{ height: '100vh', width: '100%', position: 'relative' }}>
      <ReactMapGL
        ref={mapRef}
        mapboxAccessToken={TOKEN}
        initialViewState={viewport}
        onViewportChange={setViewport}
        mapStyle="mapbox://styles/codywahid/clx1e9fek000q01qq0rl4appr"
        onDblClick={handleAddClick}
        transitionDuration="200"
        attributionControl={true}
      >
        <GeolocateControl position="top-left" trackUserLocation={true} showUserLocation={true} />
        <NavigationControl position="top-left" />
        <FullscreenControl position="top-left" />
        <MapMarkers markers={markersArray} hoveredMarker={hoveredMarker} setHoveredMarker={setHoveredMarker} />
      </ReactMapGL>
    </Box>
  );
};

export default MapComponent;

