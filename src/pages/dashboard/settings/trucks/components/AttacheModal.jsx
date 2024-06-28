import { Box, Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "../../../../../assets/svgs/modal/CloseIcon";
import BackIcon from "../../../../../assets/svgs/modal/BackIcon";
import { deviceData } from '../../../../../data/data'
import SaveIcon from "../../../../../assets/svgs/settings/SaveIcon";
import { useFormik } from "formik";
import { attachModalSchema } from "../../../../../schemas";


const AttacheModal = ({ onClose }) => {
  
const [deviceTypes,setDeviceTypes]=useState([])

useEffect(() => {
  const newTypes=[]
  deviceData.forEach(item => {
    if(!newTypes.includes(item.type)){
      newTypes.push(item.type)
    }
  });

  setDeviceTypes(newTypes)
}, [deviceData])

const initialValues = {
  deviceName: '',
  deviceType: ''
}

const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
  initialValues,
  validationSchema: attachModalSchema,
  onSubmit: (() => {
    console.log('values:', values)
  })
})

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
            fontSize: { xs: "1rem", md: "1.5rem" },
            fontWeight: 600,
          }}
        >
          <Box sx={{ cursor: "pointer", height: "25px" }} onClick={onClose}>
            <BackIcon />
          </Box>
          ATTACH DEVICE
        </Box>
        <Box sx={{ cursor: "pointer" }} onClick={onClose}>
          <CloseIcon />
        </Box>
      </Box>
      <form onSubmit={handleSubmit}>
        <Grid container mt={2} spacing={2}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth error={touched.deviceName && !!errors.deviceName}>
              <InputLabel id="device-name">Select Device</InputLabel>
              <Select
                labelId="device-name"
                label="Select Device"
                name="deviceName"
                value={values.deviceName}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ width: "100%" }}
              >
                {deviceData?.length > 0 ? (
                  deviceData?.map((device) => (
                    <MenuItem key={device._d} value={device.name}>
                      {device.name}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem key="notDevice" value="">
                    Not Any Device Available
                  </MenuItem>
                )}
              </Select>
              {touched.deviceName && errors.deviceName && (
                <FormHelperText>{errors.deviceName}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          {/* <Grid item xs={12} md={6}>
            <FormControl fullWidth error={touched.deviceType && !!errors.deviceType}>
              <InputLabel id="device-type">Select Device Type</InputLabel>
              <Select
                labelId="device-type"
                label="Select Device Type"
                name="deviceType"
                value={values.deviceType}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ width: "100%" }}
              >
                {deviceTypes?.length > 0 ? (
                  deviceTypes?.map((device, i) => (
                    <MenuItem key={i} value={device}>
                      {device}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem key="notDevice" value="">
                    Not Any Device Available
                  </MenuItem>
                )}
              </Select>
              {touched.deviceType && errors.deviceType && (
                <FormHelperText>{errors.deviceType}</FormHelperText>
              )}
            </FormControl>
          </Grid> */}
          <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  width: "255px",
                  justifyContent: "center",
                }}
              >
                <CancelBtn onClick={onClose}>Cancel</CancelBtn>
                <Button
                  type="submit"
                  startIcon={<SaveIcon />}
                  sx={{
                    color: "#fff",
                    borderRadius: "16px",
                    width: "157px",
                    padding: "16px",
                    "&:disabled": {
                      color: "#fff",
                      opacity: "0.3",
                      cursor: "not-allowed",
                    },
                  }}
                  // disabled={isLoading}
                >
                  {/* {isLoading ? "Saving..." : "Save"} */}
                  Save Device
                </Button>
              </Box>
            </Grid>
        </Grid>
      </form>
    </>
  );
};

export default AttacheModal;

const CancelBtn = styled("span")({
  fontSize: "16px",
  fontWeight: 600,
  color: "rgba(17, 17, 17, 1)",
  cursor: "pointer",
});
