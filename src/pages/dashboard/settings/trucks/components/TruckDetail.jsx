import {
  Avatar,
  Box,
  Button,
  Grid,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import profilePic from "../../../../../assets/images/settings/vehicle-pic.png";
import CancelIcon from "@mui/icons-material/Cancel";
import AddLinkIcon from '@mui/icons-material/AddLink';
import Modal from "../../../../../components/modal/Modal";
import AttacheModal from './AttacheModal'

const TruckDetail = () => {
  const [modalType, setModalType] = useState(null);

  const handleOpenAttachModal = () => {
    setModalType('attach')
  }

  const handleCloseModal = () => {
    setModalType(null)
  }

  return (
    <>
      <TruckContainer container sx={{ padding: { xs: "16px", md: "24px" } }}>
        <Grid item xs={11}>
          <Avatar
            alt="profile"
            src={profilePic}
            sx={{
              width: "200px",
              height: "200px",
              position: "relative",
              overflow: "hidden",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <Typography
            variant="h6"
            sx={{ width: "200px", textAlign: "center", mt: 1 }}
          >
            Truck Name
          </Typography>
        </Grid>
        <Grid item xs={1} display='flex' justifyContent='flex-end'>
          <Box sx={{ cursor: "pointer" }} onClick={handleOpenAttachModal}>
            <Tooltip title="Attach Device">
              <AddLinkIcon style={{color: '#006bce', width:'40px', height:'40px'}} />
            </Tooltip>
          </Box>
        </Grid>
        <Grid item xs={12} mt={4}>
          <Typography variant="h6">Attached Devices</Typography>
          <Grid container spacing={2} mt={1}>
            <DeviceCard />
            <DeviceCard />
          </Grid>
        </Grid>
      </TruckContainer>
      {modalType === 'attach' && (
        <Modal onClose={handleCloseModal}>
          <AttacheModal onClose={handleCloseModal} />
        </Modal>
      )}
    </>
  );
};

export default TruckDetail;

const DeviceCard = () => {
  return (
    <Grid item xs={12} md={6} lg={4} xl={3}>
      <Box
        sx={{
          position: "relative",
          background: "rgba(255, 255, 255, 1)",
          borderRadius: "12px",
          padding: {
            xs: "1rem",
            md: "2rem",
          },
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "rgba(70, 66, 85, 1)",
            fontSize: "18px",
            fontWeight: 500,
          }}
        >
          device id
        </Typography>
        <Box
          sx={{
            marginTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "rgba(127, 127, 146, 1)",
                fontSize: "12px",
              }}
            >
              Date/time creation
            </Typography>
            <Typography
              sx={{
                color: "rgba(0, 107, 206, 1)",
                fontSize: "16px",
              }}
            >
              creation date
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "rgba(127, 127, 146, 1)",
                fontSize: "12px",
              }}
            >
              Device Name
            </Typography>
            <Typography
              sx={{
                color: "rgba(0, 107, 206, 1)",
                fontSize: "16px",
              }}
            >
              device name
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "rgba(127, 127, 146, 1)",
                fontSize: "12px",
              }}
            >
              Device Type
            </Typography>
            <Typography
              sx={{
                color: "rgba(0, 107, 206, 1)",
                fontSize: "16px",
              }}
            >
              device type
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "rgba(127, 127, 146, 1)",
                fontSize: "12px",
              }}
            >
              Assigned To
            </Typography>
            <Typography
              sx={{
                color: "rgba(0, 107, 206, 1)",
                fontSize: "16px",
              }}
            >
              assignted to
            </Typography>
          </Box>
        </Box>
        <CancelBtn />
      </Box>
    </Grid>
  );
};

const TruckContainer = styled(Grid)({
  background: "#F5F4F4",
  borderRadius: "24px",
  // height: "100%",
  marginTop: "-4rem",
});

const CancelBtn = () => {
  return (
    <Box sx={{ position: "absolute", top: 8, right: 8, cursor: "pointer" }}>
      <Tooltip title="Detache Device">
        <CancelIcon style={{ color: "#d30000" }} />
      </Tooltip>
    </Box>
  );
};
