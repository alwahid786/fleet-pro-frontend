import React from "react";
import Modal from "../../../../../components/modal/Modal";
import { Box, Button, Typography } from "@mui/material";

const TruckModal = ({ show, handleClose, trucks = [], handleSelect }) => {

  console.log('modal trucks', trucks);
  const connectedTrucks = trucks?.filter((truck) => truck?.devices?.length > 0 )
  console.log("coonected trucks",connectedTrucks)
  if (!show) return null;

  return (
    <Modal onClose={handleClose}>
      <div>
        <h2>Select a Truck</h2>
        {connectedTrucks.length > 0 ? (
          <Box>
            {connectedTrucks.map((truck, _id) => (
              <Box key={_id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                  <img
                    width="30%"
                    src={truck.image.url}
                    alt={truck.truckName}
                  />
                  <Typography> {truck.truckName} </Typography>
                </Box>
                <Button
                  sx={{ color: "white" }}
                  variant="contain"
                  onClick={() => handleSelect(truck)}
                >
                  Select
                </Button>
              </Box>
            ))}
          </Box>
        ) : (
          <p>No trucks available</p>
        )}
      </div>
    </Modal>
  );
};

export default TruckModal;
