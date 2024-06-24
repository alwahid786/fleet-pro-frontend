import React from 'react';
import { Marker, Popup } from 'react-map-gl';


const MapMarkers = ({ markers, hoveredMarker, setHoveredMarker }) => {
  return (
    <>
      {markers.map(marker => (
        <Marker
          key={marker.id}
          longitude={marker.longitude}
          latitude={marker.latitude}
          anchor="top"
        >
          <div
            onMouseEnter={() => setHoveredMarker(marker)}
            onMouseLeave={() => setHoveredMarker(null)}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              transform: `translate(${marker.longitude}px, ${marker.latitude}px)`,
              cursor: 'pointer',
              zIndex: 1,
            }}
            className="map-marker"
          >
     <img src={marker.icon} alt="Truck Icon" />
          </div>
        </Marker>
      ))}
      {hoveredMarker && (
        <Popup
          latitude={hoveredMarker.latitude}
          longitude={hoveredMarker.longitude}
          closeButton={false}
          closeOnClick={false}
          anchor="bottom"
        >
          <div>
            <h2>Marker Information</h2>
            <p>Details about this location</p>
          </div>
        </Popup>
      )}
    </>
  );
};

export default MapMarkers;