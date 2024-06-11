import React, { useState } from "react";
import CustomCard from "./components/CustomCard";
import { Box } from "@mui/material";
import AddIcon from "../../../../assets/svgs/settings/AddIcon";
import DownloadIcon from "../../../../assets/svgs/reports/DownloadIcon";
import { drivers } from "../../../../data/data";
import Modal from "../../../../components/modal/Modal";
import AddDriver from "./components/AddDriver";
import EditDriver from "./components/EditDriver";


const Drivers = () => {
  const [modalType, setModalType] = useState(null);

  const handleOpenAddUserModal = () => {
    setModalType('add');
  }

  const handleOpenEditModal = () => {
    setModalType('edit');
  }

  const handleCloseModal = () => {
    setModalType(null);
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
          <Box sx={{cursor: 'pointer'}} onClick={handleOpenAddUserModal} >
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
            <CustomCard key={i} driver={ driver } handleOpenEditModal={handleOpenEditModal} />
          ))}
        </Box>
      </Box>
      {modalType === 'edit' && (
        <Modal onClose={handleCloseModal}>
          <EditDriver onClose={handleCloseModal} />
        </Modal>
      )}
      {modalType === 'add' && (
        <Modal onClose={handleCloseModal}>
          <AddDriver onClose={handleCloseModal} />
        </Modal>
      )}
    </>
  );
};

export default Drivers;
