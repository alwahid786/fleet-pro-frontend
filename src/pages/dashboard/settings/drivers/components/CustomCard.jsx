import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Avatar,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ProfilePic from '../../../../../assets/images/settings/driver-profile.png'

import React from "react";

const CustomCard = ({ driver }) => {
  return (
    <>
      <Card
        sx={{
          position: "relative",
          overflow: "visible",
          flexGrow: "1",
          border: "none",
          boxShadow: 'none',
          borderRadius: '12px',
          padding: {
            xs: "0px",
            md: "10px",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-15%",
            left: "50%",
            transform: "translate(-50%, 0)",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={ProfilePic}
            sx={{
              width: "80px",
              height: "80px",
              position: "relative",
              overflow: "visible",
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          >
          </Avatar>
          <Box
              sx={{
                width: "15px",
                height: "15px",
                backgroundColor: "#00A389",
                borderRadius: "100%",
                position: "absolute",
                border: "2px solid white",
                bottom: "-7px",
                left: '50%',
                transform: 'translate(-50%, 0px)'
              }}
            ></Box>
        </Box>
        <CardContent>
          <Box sx={{ textAlign: "center", marginTop: "25px" }}>
            <Typography
              variant="h6"
              component="Box"
              sx={{
                fontSize: {
                  xs: "14px",
                  md: "18px",
                },
                color: "#464255",
                fontWeight: "500",
              }}
            >
              {driver.name}
            </Typography>
          </Box>
          <Box
            style={{
              marginTop: "8px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  fontSize: {
                    xs: "10px",
                    md: "12px",
                  },
                  color: "#7F7F92",
                  fontWeight: "400",
                }}
              >
                Creation Date
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    xs: "14px",
                    md: "16px",
                  },
                  color: "#006BCE",
                  fontWeight: "400",
                }}
              >
                {driver.creationDate}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  fontSize: {
                    xs: "10px",
                    md: "12px",
                  },
                  color: "#7F7F92",
                  fontWeight: "400",
                }}
              >
                Driver ID
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    xs: "14px",
                    md: "16px",
                  },
                  color: "#006BCE",
                  fontWeight: "400",
                }}
              >
                {driver.driverID}
              </Typography>
            </Box>
          </Box>
          <Box
            style={{
              marginTop: "13px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  fontSize: {
                    xs: "10px",
                    md: "12px",
                  },
                  color: "#7F7F92",
                  fontWeight: "400",
                }}
              >
                License Expiry
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    xs: "14px",
                    md: "16px",
                  },
                  color: "#006BCE",
                  fontWeight: "400",
                }}
              >
                {driver.licenseExpiry}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  fontSize: {
                    xs: "10px",
                    md: "12px",
                  },
                  color: "#7F7F92",
                  fontWeight: "400",
                }}
              >
                Assign Truck
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    xs: "14px",
                    md: "16px",
                  },
                  color: "#006BCE",
                  fontWeight: "400",
                }}
              >
                {driver.assignedTruck}
              </Typography>
            </Box>
          </Box>
          <Button
            variant="outlined"
            size="small"
            sx={{
              color: "black",
              marginTop: "27px",
              width: "100%",
              background: "transparent",
              "&:hover": {
                background: "transparent",
              },
            }}
            startIcon={<LocalPhoneIcon sx={{ color: "#006BCE" }} />}
          >
            {driver.phone}
          </Button>
        </CardContent>

        <CardActions>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              gap: "10px",
            }}
          >
            <Button
              size="small"
              sx={{
                background: "#006BCE33",
                minWidth: "127px",
                "&:hover": {
                  background: "transparent",
                },
              }}
              startIcon={<EditIcon sx={{ color: "#006BCE" }} />}
            >
              Edit
            </Button>
            <Button
              size="small"
              color="error"
              sx={{
                background: "#FFCCC6",
                minWidth: "127px",
                "&:hover": {
                  background: "transparent",
                },
              }}
              startIcon={<DeleteIcon sx={{ color: "#FF1900" }} />}
            >
              Delete
            </Button>
          </Box>
        </CardActions>
      </Card>
    </>
  );
};

export default CustomCard;
