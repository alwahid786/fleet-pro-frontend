import React from "react";
import { MapContainer, TileLayer, Polygon, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Box, Button, Typography } from "@mui/material";
import DetailIcon from "../../../../../assets/svgs/geofence/DetailIcon";

const ViewFence = ({ onClose, editModal }) => {
  const polygonCoordinates = [
    [29.634, 35.122],
    [30.059, 36.011],
    [30.701, 35.552],
    [30.233, 34.742],
    [29.634, 35.122],
  ];

  return (
    <MapContainer
      center={[29.643, 35.122]}
      zoom={6}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Polygon positions={polygonCoordinates}>
        <Popup style={{ width: "320px" }} className="geofencePopup">
          <ModalView
            name="Test522"
            status="Disable"
            alert="Out-fence"
            startTime="2023-05-22 13:09"
            endTime="2023-05-22 13:09"
            area="5628599.41Km"
            onClose={onClose}
            editModal={editModal}
          />
        </Popup>
      </Polygon>
    </MapContainer>
  );
};

export default ViewFence;

const ModalView = ({
  name,
  status,
  alert,
  startTime,
  endTime,
  area,
  editModal,
  onClose,
}) => {
  return (
    <Box sx={{ borderRadius: "20px", width: "320px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          color: "#fff",
          fontSize: "18px",
          background: "rgba(1, 64, 125, 1)",
          padding: "16px 20px",
          borderRadius: "10px 10px 0 0",
        }}
      >
        <DetailIcon />
        Details
      </Box>
      <Box sx={{ padding: "12px" }}>
        <Box sx={{ borderRadius: "12px" }}>
          {/* <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontSize: "16px",
              background: "rgba(0, 51, 101, 1)",
              padding: "14px",
              borderRadius: "10px 10px 0 0",
            }}
          >
            Fence Info
          </Typography> */}
          <Box
            sx={{
              background: "rgba(223, 239, 255, 0.5)",
              padding: "1rem",
              borderRadius: "12px"
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                variant="h6"
                sx={{ color: "#000", fontSize: "14px", flexBasis: "50%" }}
              >
                Geofence name
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#000", fontSize: "14px", flexBasis: "50%" }}
              >
                {name}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "16px 20px",
          borderRadius: "0 0 10px 10px",
          background: "rgba(1, 64, 125, 1)",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Button
            sx={{
              background: "transparent",
              fontSize: "16px",
              fontWeight: 600,
              color: "#fff",
              border: "1.8px solid #fff",
              borderRadius: "8px",
              width: "90px",
            }}
            onClick={onClose}
          >
            Back
          </Button>
          <Button
            sx={{
              background: "rgba(0, 107, 206, 1)",
              fontSize: "16px",
              fontWeight: 600,
              color: "#fff",
              border: "1.8px solid rgba(0, 107, 206, 1)",
              borderRadius: "8px",
              width: "90px",
            }}
            onClick={editModal}
          >
            Edit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
