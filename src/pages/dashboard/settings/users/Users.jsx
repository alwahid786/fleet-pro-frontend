import React, { useState } from 'react'
import { users } from '../../../../data/data'
import { Box } from "@mui/material";
import AddIcon from "../../../../assets/svgs/settings/AddIcon";
import DownloadIcon from "../../../../assets/svgs/reports/DownloadIcon";
import UserCard from './components/UserCard';
import Modal from '../../../../components/loader/modal/Modal';
import EditUser from './components/EditUser';

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }
  const handleCloseModal = () => {
    setIsModalOpen(false);
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
            padding: "10px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Box 
          onClick={handleOpenModal}
          sx={{ cursor: 'pointer' }}
          >
            <AddIcon />
          </Box>
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
          {users.map((user, i) => (
            <UserCard key={i} user={user} />
          ))}
        </Box>
      </Box>
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <EditUser onClose={handleCloseModal} />
        </Modal>
      )}
    </>
  )
}

export default Users
