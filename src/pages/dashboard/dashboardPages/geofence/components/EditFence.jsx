import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import BackIcon from "../../../../../assets/svgs/modal/BackIcon";
import CloseIcon from "../../../../../assets/svgs/modal/CloseIcon";
import EditMap from "./EditMap";
import TruckList from "./TruckList";

const EditFence = ({ onClose, editSelectedRow }) => {
  const [name, setName] = useState(editSelectedRow?.name );
  const [alert, setAlert] = useState(editSelectedRow?.alert);
  const [status, setStatus] = useState(editSelectedRow?.status);
  const [startDate, setStartDate] = useState(editSelectedRow?.startDate?.split("T")[0]);
  const [endDate, setEndDate] = useState(editSelectedRow?.endDate?.split("T")[0]);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            color: "rgba(17, 17, 17, 1)",
            fontSize: {
              xs: "1rem",
              md: "1.5rem",
            },
            fontWeight: 600,
          }}
        >
          <Box sx={{ cursor: "pointer", height: "25px" }} onClick={onClose}>
            <BackIcon />
          </Box>
          EDIT FENCE
        </Box>
        <Box sx={{ cursor: "pointer" }} onClick={onClose}>
          <CloseIcon onClick={onClose} />
        </Box>
      </Box>
      <Typography
        variant="h3"
        sx={{ color: "#000", fontSize: "20px", fontWeight: 700 }}
      >
        Info
      </Typography>
      <Grid container spacing="14" mt={1}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="text"
            label="Geofence Name"
            name="geofenceName"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="select-status">Select Status</InputLabel>
            <Select
              labelId="select-status"
              label="Select Status"
              name="status"
              value={status}
            onChange={(e)=>setStatus(e.target.value)}

              sx={{ width: "100%" }}
            >
              <MenuItem value={"inactive"}>Inactive</MenuItem>
              <MenuItem value={"active"}>Active</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel id="select-fence">Select Fence</InputLabel>
            <Select
              labelId="select-fence"
              label="Select Fence"
              name="alert"
              value={alert}
            onChange={(e)=>setAlert(e.target.value)}

              sx={{ width: "100%" }}
            >
              <MenuItem value={"infence"}>In-Fence</MenuItem>
              <MenuItem value={"outfence"}>Out-Fence</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs="12" lg="6">
          <TextField
            type="date"
            label="startDate"
            maxLength="30"
            fullWidth
            value={new Date(startDate)}
            onChange={(e)=>setStartDate(e.target.value)}

            name="startDate"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs="12" lg="6">
          <TextField
            type="date"
            label="endDate"
            maxLength="30"
            fullWidth
            value={new Date(endDate)}
            onChange={(e)=>setEndDate(e.target.value)}

            name="endDate"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
      {/* Map */}
      <Typography
        mt={2}
        variant="h3"
        sx={{ color: "#000", fontSize: "20px", fontWeight: 700 }}
      >
        Location
      </Typography>
      <Box mt={2} sx={{ width: "100%", height: "400px" }}>
        <EditMap />
      </Box>
      {/* List */}
      <Typography
        mt={2}
        variant="h3"
        sx={{ color: "#000", fontSize: "20px", fontWeight: 700 }}
      >
        List
      </Typography>
      <Grid container mt={2}>
        <Grid items xs={12} md={12}>
          <TruckList />
        </Grid>
      </Grid>
    </>
  );
};

export default EditFence;
