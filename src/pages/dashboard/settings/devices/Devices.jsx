import { Box } from "@mui/material";
import React, { useState } from "react";
import { devices as initialDevices } from "../../../../data/data";
import DeviceCard from "./components/DeviceCard";
import { confirmAlert } from "react-confirm-alert";
import { toast } from "react-toastify";
import DownloadIcon from "../../../../assets/svgs/reports/DownloadIcon";
import AddIcon from "../../../../assets/svgs/settings/AddIcon";
import Modal from '../../../../components/modal/Modal';
import EditDevice from "./components/EditDevice";
import AddDevice from "./components/AddDevice";


const Devices = () => {
  const [devices, setDevices] = useState(initialDevices);
  const [modalType, setModalType] = useState(null);

  const handleOpenEditModal = () => {
    setModalType('edit')
  }

  const handleOpenAddModal = () => {
    setModalType('add')
  }

  const handleCloseModal = () => {
    setModalType(null)
  }

  const handleDeleteDevice = (deviceId) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete the user?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            setDevices(devices.filter((device) => device._id !== deviceId));
            toast.success("Device deleted successfully");
          },
        },
        {
          label: "No",
          onClick: () => toast.info("Delete action cancelled"),
        },
      ],
    });
  };
  return (
    <>
      <Box
        sx={{
          background: "#F5F4F4",
          padding: "16px",
          borderRadius: "24px",
        }}
      >
        <Box
          sx={{
            padding: "10px 30px",
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
          }}
        >
          <Box sx={{ cursor: "pointer" }} onClick={handleOpenAddModal} >
            <AddIcon />
          </Box>
          <DownloadIcon />
        </Box>
        <Box
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.8rem",
          }}
        >
          {devices.map((device, i) => (
            <DeviceCard
              key={i}
              device={device}
              handleDeleteDevice={handleDeleteDevice}
              handleOpenEditModal={handleOpenEditModal}
            />
          ))}
        </Box>
      </Box>
      {modalType === 'edit' && (
        <Modal onClose={handleCloseModal}>
          <EditDevice onClose={handleCloseModal} />
        </Modal>
      )}
      {modalType === 'add' && (
        <Modal onClose={handleCloseModal}>
          <AddDevice onClose={handleCloseModal} />
        </Modal>
      )}
    </>
  );
};

export default Devices;
