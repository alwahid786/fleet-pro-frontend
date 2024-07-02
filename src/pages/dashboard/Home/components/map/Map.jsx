import React, { useEffect, useState } from "react";
import L from "leaflet";
import TruckIcon from "../../../../../assets/images/truck.png";
import { MapContainer, TileLayer, Marker, Popup, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

const truckIcon = new L.Icon({
  iconUrl: TruckIcon,
  iconSize: [45, 45],
});

const Map = () => {
  const [truckPosition, setTruckPosition] = useState(null);
  const [drawnLayer, setDrawnLayer] = useState(null);
  const [hasCrossedBoundary, setHasCrossedBoundary] = useState(false);

  useEffect(() => {
    let interval; 

    if (truckPosition && drawnLayer) {
      interval = setInterval(() => {
        const newPosition = [truckPosition[0] + 0.001, truckPosition[1] + 0.001];
        setTruckPosition(newPosition);

        if (drawnLayer.getBounds) {
          if (!drawnLayer.getBounds().contains(newPosition)) {
            if (!hasCrossedBoundary) {
              alert('Truck has crossed the boundary!');
              setHasCrossedBoundary(true);
            }
          } else {
            setHasCrossedBoundary(false);
          }
        } else if (drawnLayer.getLatLng) {
          const center = drawnLayer.getLatLng();
          const radius = drawnLayer.getRadius();
          const distance = center.distanceTo(newPosition);
          if (distance > radius) {
            if (!hasCrossedBoundary) {
              alert('Truck has crossed the boundary!');
              setHasCrossedBoundary(true);
            }
          } else {
            setHasCrossedBoundary(false);
          }
        }
      }, 100);
    }

    return () => {
      clearInterval(interval);
    };
  }, [truckPosition, drawnLayer, hasCrossedBoundary]);


  const _created = (e) => {
    const type = e.layerType;
    const layer = e.layer;

    setDrawnLayer(layer);
    setHasCrossedBoundary(false);

    if (type === 'polygon' || type === 'rectangle') {
      const bounds = layer.getBounds();
      const center = bounds.getCenter();
      setTruckPosition([center.lat, center.lng]);
    } else if (type === 'circle') {
      const center = layer.getLatLng();
      setTruckPosition([center.lat, center.lng]);
    } else {
      setTruckPosition(null); // If the user draws a polyline or marker, don't move the truck
    }
  };

  return (
    <>
      <MapContainer
        center={[25.276987, 55.296249]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <FeatureGroup>
          <EditControl
            position="topright"
            onCreated={_created}
            draw={{
              polygon: true,
              rectangle: false,
              circle: true,
              polyline: false,
              marker: false,
              circlemarker: false,
            }}
          />
        </FeatureGroup>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {truckPosition && (
          <Marker position={truckPosition} icon={truckIcon}>
            <Popup>
              Truck is here: <pre>{JSON.stringify(truckPosition, null, 2)}</pre>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </>
  );
};

export default Map;
