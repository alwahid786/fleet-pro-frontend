import React, { useEffect, useState } from "react";
import L from "leaflet";
import TruckIcon from "../../../../../assets/images/truck.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const truckIcon = new L.Icon({
  iconUrl: TruckIcon,
  iconSize: [45, 45],
});

const Map = () => {
  const [truckPosition, setTruckPosition] = useState([51.505, -0.09]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTruckPosition([truckPosition[0] + 0.0001, truckPosition[0] + 0.0001]);
    }, 100);

    return () => clearInterval(interval);
  }, [truckPosition]);

  return (
    <>
      <MapContainer
        center={truckPosition}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={truckPosition} icon={truckIcon}>
          <Popup>
            Truck is here: <pre>{JSON.stringify(truckPosition, null, 2)}</pre>
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
