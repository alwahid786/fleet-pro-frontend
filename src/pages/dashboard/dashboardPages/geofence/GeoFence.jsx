import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box, Button, TextField, MenuItem } from '@mui/material'
import AddIcon from '../../../../assets/svgs/settings/AddIcon'
import ViewIcon from '../../../../assets/svgs/geofence/ViewIcon'
import EditIcon from '../../../../assets/svgs/geofence/EditIcon'
import DeleteIcon from '../../../../assets/svgs/geofence/DeleteIcon'
import Modal from '../../../../components/modal/Modal'
import AddFence from './components/AddFence'
import ViewFence from './components/ViewFence'
import EditFence from './components/EditFence'

const rows = [
  {
    id: 1,
    group: 'Customer Test',
    geofenceName: 'Leave Company Name',
    status: 'Disable|Invalid',
    alert: 'Out-Fence',
    startTime: '05/22/2024 16:09',
    endTime: '05/22/2024 16:09',
    deviceCour: '3',
    operation: '60',
  },
  {
    id: 4,
    group: 'Customer Test',
    geofenceName: 'Leave Company Name',
    status: 'Disable|Invalid',
    alert: 'Out-Fence',
    startTime: '05/22/2024 16:09',
    endTime: '05/22/2024 16:09',
    deviceCour: '3',
    operation: '60',
  },
  {
    id: 2,
    group: 'Customer Test',
    geofenceName: 'Leave Company Name',
    status: 'Disable|Invalid',
    alert: 'Out-Fence',
    startTime: '05/22/2024 16:09',
    endTime: '05/22/2024 16:09',
    deviceCour: '3',
    operation: '60',
  },
  {
    id: 3,
    group: 'Customer Test',
    geofenceName: 'Leave Company Name',
    status: 'Disable|Invalid',
    alert: 'Out-Fence',
    startTime: '05/22/2024 16:09',
    endTime: '05/22/2024 16:09',
    deviceCour: '3',
    operation: '60',
  },
]

const GeoFence = () => {
  const [modalType, setModalType] = useState(null);

  const handleAddModal = () => {
    setModalType('add');
  }
  const handleViewModal = () => {
    setModalType('view');
  }
  const handleEditModal = () => {
    setModalType('edit');
  }
  const handleCloseModal = () => {
    setModalType(null);
  }

  const columns = [
  {
    field: 'geofenceName',
    headerName: 'GEOFENCE NAME',
    headerAlign: 'center',
    align: 'center',
    width: 230,
  },
  {
    field: 'status',
    headerName: 'STATUS',
    headerAlign: 'center',
    align: 'center',
    width: 150,
  },
  {
    field: 'alert',
    headerName: 'ALERT',
    headerAlign: 'center',
    align: 'center',
    width: 130,
  },
  {
    field: 'startTime',
    headerName: 'START TIME',
    headerAlign: 'center',
    align: 'center',
    width: 180,
  },
  {
    field: 'endTime',
    headerName: 'END TIME',
    headerAlign: 'center',
    align: 'center',
    width: 180,
  },
  {
    field: 'deviceCour',
    headerName: 'DEVICE COUR',
    headerAlign: 'center',
    align: 'center',
    width: 150,
  },
  {
    field: 'operation',
    headerName: 'OPERATION',
    width: 130,
    renderCell: () => (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '7px' }}>
        <Box sx={{ cursor: 'pointer' }} onClick={handleViewModal}>
          <ViewIcon />
        </Box>
        <Box sx={{ cursor: 'pointer' }} onClick={handleEditModal}>
          <EditIcon />
        </Box>
        <Box sx={{ cursor: 'pointer' }}>
          <DeleteIcon />
        </Box>
      </Box>
    ),
  },
]

  return (
    <Box
      sx={{
        width: '100%',
        background: '#ffffff',
        borderRadius: '24px 24px 0 0',
        marginTop: '-3.5rem',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '16px',
        }}
      >
        <Box sx={{cursor: 'pointer'}} onClick={handleAddModal}>
          <AddIcon />
        </Box>
      </Box>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        sx={{
          '& .MuiDataGrid-row.even-row': {
            backgroundColor: '#fafafa',
          },
          '& .MuiDataGrid-columnHeader .MuiDataGrid-columnHeaderTitle': {
            fontSize: {
              xs: '14px',
              md: '16px',
            },
            fontWeight: 600,
            color: '#111111',
          },
          '& .MuiDataGrid-row .MuiDataGrid-cell': {
            fontSize: {
              xs: '14px',
              md: '16px',
            },
            background: '#fafafa',
            fontWeight: 400,
            color: 'rgba(17, 17, 17, 0.6)',
          },
          '& .MuiDataGrid-root': {
            borderTopLeftRadius: '24px !important',
            borderTopRightRadius: '24px !important',
            border: '0 !important',
            overflow: 'hidden',
            width: '100%',
          },
          '& .MuiDataGrid-main': {
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
            width: '100%',
            padding: '0 10px',
          },
          '& .MuiDataGrid-overlay': {
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
          },
          '& .MuiDataGrid-footerContainer': {
            display: 'none',
          },
          '& .MuiDataGrid-scrollbar': {
            '&::-webkit-scrollbar': {
              width: '6px',
              height: '6px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#00193333',
              borderRadius: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#006bce',
              borderRadius: '10px',
            },
          },
        }}
      />
      {modalType === 'add' && (
        <Modal onClose={handleCloseModal}>
          <AddFence onClose={handleCloseModal} />
        </Modal>
      )}
      {modalType === 'view' && (
        <Modal onClose={handleCloseModal}>
          <ViewFence onClose={handleCloseModal} editModal={handleEditModal} />
        </Modal>
      )}
      {modalType === 'edit' && (
        <Modal onClose={handleCloseModal}>
          <EditFence onClose={handleCloseModal} />
        </Modal>
      )}
    </Box>
  )
}

export default GeoFence
