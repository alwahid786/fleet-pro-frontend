import React, { useState } from "react";
import CustomCard from "./components/CustomCard";
import { Box } from "@mui/material";
import AddIcon from "../../../../assets/svgs/settings/AddIcon";
import DownloadIcon from "../../../../assets/svgs/reports/DownloadIcon";
import { drivers as initialDrivers } from "../../../../data/data";
import Modal from "../../../../components/modal/Modal";
import AddDriver from "./components/AddDriver";
import EditDriver from "./components/EditDriver";
import { confirmAlert } from "react-confirm-alert";
import { toast } from "react-toastify";


const Drivers = () => {
  const [modalType, setModalType] = useState(null);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [drivers, setDrivers] = useState(initialDrivers);

  const handleOpenAddDriverModal = () => {
    setModalType('add');
    setSelectedDriver(null)
  }

  const handleOpenEditModal = (driver) => {
    setModalType('edit');
    setSelectedDriver(driver)
    console.log('selectedDriver', driver)
  }

  const handleCloseModal = () => {
    setModalType(null);
    setSelectedDriver(null)
  }

  const handleSaveDriver = (newDriver) => {
    if(modalType === 'edit') {
      setDrivers(drivers.map(driver => driver.id === newDriver.id ? newDriver : driver))
    } else if (modalType === 'add') {
      setDrivers([...drivers, newDriver])
    }
    handleCloseModal();
  }

  const handleDeleteDriver = (driverId) => {
    confirmAlert({
      title: 'Confirm delete driver',
      message: 'Are you sure you want to delete the driver?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            setDrivers(drivers.filter(driver => driver.id !== driverId));
            toast.success('Driver deleted successfully', {autoClose: 2000})
          },
        },
        {
          label: 'No',
          onClick: () => toast.info('Delete action cancelled', {autoClose: 2000})
        }
      ]
    })
  }

  return (
    <>
      <Box
        sx={{
          background: "#F5F4F4",
          padding: {
            xs: "5px",
            md: "10px",
          },
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
          <Box sx={{cursor: 'pointer'}} onClick={handleOpenAddDriverModal} >
            <AddIcon />
          </Box>
          <DownloadIcon />
        </Box>
        <Box
          style={{
            marginTop: "50px",
            display: "flex",
            flexWrap: "wrap",
            columnGap: "1rem",
            rowGap: "4rem",
          }}
        >
          {drivers.map((driver, i) => (
            <CustomCard key={i} driver={ driver } handleOpenEditModal={handleOpenEditModal} onDelete={handleDeleteDriver} />
          ))}
        </Box>
      </Box>
      {modalType === 'edit' && (
        <Modal onClose={handleCloseModal}>
          <EditDriver driver={selectedDriver} onClose={handleCloseModal} onSave={handleSaveDriver} />
        </Modal>
      )}
      {modalType === 'add' && (
        <Modal onClose={handleCloseModal}>
          <AddDriver onClose={handleCloseModal} onSave={handleSaveDriver} />
        </Modal>
      )}
    </>
  );
};

export default Drivers;
