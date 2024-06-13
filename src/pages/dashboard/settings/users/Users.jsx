import React, { useState } from 'react';
import { users as initialUsers } from '../../../../data/data';
import { Box } from "@mui/material";
import AddIcon from "../../../../assets/svgs/settings/AddIcon";
import UserCard from './components/UserCard';
import Modal from '../../../../components/modal/Modal';
import EditUser from './components/EditUser';
import AddUser from './components/AddUser';
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';

const Users = () => {
  const [modalType, setModalType] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = (useStateinitialUsers);

  const handleOpenAddUserModal = () => {
    setModalType('add');
    setSelectedUser(null)
  }

  const handleOpenEditModal = (user) => {
    setModalType('edit');
    setSelectedUser(user)
    console.log('user:', user)
  }

  const handleCloseModal = () => {
    setModalType(null);
    setSelectedUser(null)
  }

  const handleSaveUser = (newUser) => {
    if(modalType === 'edit') {
      setUsers(users.map(user => user.id === newUser.id ? newUser : user))
    } else if (modalType === 'add') {
      setUsers([...users, newUser]);
    }
    handleCloseModal();
  }

  const handleDeleteUser = (userId) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to delete this user?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            setUsers(users.filter(user => user.id !== userId));
            toast.success('User deleted successfully');
          },
        },
        {
          label: 'No',
          onClick: () => toast.info('Delete action canceled')
        }
      ]
    })
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
            <UserCard key={i} user={user} handleOpenEditModal={handleOpenEditModal} handleDeleteUser={handleDeleteUser} />
          ))}
        </Box>
      </Box>
      {modalType === 'edit' && (
        <Modal onClose={handleCloseModal}>
          <EditUser user={selectedUser} onSave={handleSaveUser} onClose={handleCloseModal} />
        </Modal>
      )}
      {modalType === 'add' && (
        <Modal onClose={handleCloseModal}>
          <AddUser onSave={handleSaveUser} onClose={handleCloseModal} />
        </Modal>
      )}
    </>
  );
}

export default Users;
