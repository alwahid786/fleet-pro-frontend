import React, { useState } from 'react'
import TruckCard from './components/TruckCard'
import { trucks } from '../../../../data/data'
import { Box } from '@mui/material'
import AddIcon from "../../../../assets/svgs/settings/AddIcon";
import DownloadIcon from "../../../../assets/svgs/reports/DownloadIcon";
import Modal from '../../../../components/modal/Modal';
import EditTruck from './components/EditTruck';
import AddTruck from './components/AddTruck';


const Trucks = () => {
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
          <Box sx={{cursor: 'pointer'}} onClick={handleOpenAddUserModal}>
            <AddIcon />
          </Box>
          <DownloadIcon />
        </Box>
        <Box
          style={{
            marginTop: "50px",
            display: "flex",
            flexWrap: "wrap",
            columnGap: "0.3rem",
            rowGap: "3.4rem",
          }}
        >
          {trucks.map((truck, i)=>(
            <TruckCard key={i} truck={truck} handleOpenEditModal={handleOpenEditModal} />
          ))} 
        </Box>
      </Box>
      {modalType && (
        <Modal onClose={handleCloseModal}>
          {modalType === 'edit' && <EditTruck onClose={handleCloseModal} />}
          {modalType === 'add' && <AddTruck onClose={handleCloseModal} /> }
        </Modal>
      )}
    </>
  )
}

export default Trucks


