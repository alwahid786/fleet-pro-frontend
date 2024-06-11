import React, { useState } from 'react';
import { users } from '../../../../data/data';
import { Box } from "@mui/material";
import AddIcon from "../../../../assets/svgs/settings/AddIcon";
import UserCard from './components/UserCard';
import Modal from '../../../../components/modal/Modal';
import EditUser from './components/EditUser';
import AddUser from './components/AddUser';

const Users = () => {
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
      <Box sx={{ background: "#F5F4F4", padding: { xs: "5px", md: "10px" }, borderRadius: "24px" }}>
        <Box sx={{ padding: "10px", display: "flex", justifyContent: "flex-end" }}>
          <Box onClick={handleOpenAddUserModal} sx={{ cursor: 'pointer' }}>
            <AddIcon />
          </Box>
        </Box>
        <Box style={{ marginTop: "50px", display: "flex", flexWrap: "wrap", columnGap: "1rem", rowGap: "4rem" }}>
          {users.map((user, i) => (
            <UserCard key={i} user={user} handleOpenEditModal={handleOpenEditModal} />
          ))}
        </Box>
      </Box>
      {modalType === 'edit' && (
        <Modal onClose={handleCloseModal}>
          <EditUser onClose={handleCloseModal} />
        </Modal>
      )}
      {modalType === 'add' && (
        <Modal onClose={handleCloseModal}>
          <AddUser onClose={handleCloseModal} />
        </Modal>
      )}
    </>
  );
}

export default Users;
