import {
    Box,
    Button,
    Grid,
    TextField,
    Typography,
    styled,
  } from "@mui/material";
  import React from "react";
  import BackIcon from "../../../../../assets/svgs/modal/BackIcon";
  import CloseIcon from "../../../../../assets/svgs/modal/CloseIcon";
  import SaveIcon from "../../../../../assets/svgs/settings/SaveIcon";
  
  const AddDevice = ({ onClose }) => {
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
            ADD DEVICE
          </Box>
          <Box sx={{ cursor: "pointer" }} onClick={onClose}>
            <CloseIcon onClick={onClose} />
          </Box>
        </Box>
        {/* Form  */}
        <Box
          sx={{
            marginTop: {
              xs: "1rem",
              lg: "2.5rem",
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "20px",
              marginBottom: "2rem",
            }}
          >
            General Info
          </Typography>
          <Grid container spacing="14">
            <Grid item xs="12" lg="6">
              <TextField
                fullWidth
                type="text"
                label="Device Name"
                maxLength="20"
              />
            </Grid>
            <Grid item xs="12" lg="6">
              <TextField
                fullWidth
                type="text"
                label="Device Type"
                maxLength="30"
              />
            </Grid>
            <Grid item xs="12" mt={3}>
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
                  // onClick={handleSave}
                  startIcon={<SaveIcon />}
                  sx={{
                    color: "#fff",
                    borderRadius: "16px",
                    width: "157px",
                    padding: "16px",
                    "&:disabled": {
                      opacity: "0.3",
                      color: "white",
                      cursor: "not-allowed",
                    },
                  }}
                  // disabled={isLoading}
                >
                  {/* {isLoading ? "Saving..." : "SAVE Device"} */}
                  Save Device
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  };
  
  export default AddDevice;
  
  const CancelBtn = styled("span")({
    fontsize: "16px",
    fontWeight: 600,
    color: "rgba(17, 17, 17, 1)",
    cursor: "pointer",
  });
  