import { Box } from '@mui/material'
import React, { useState } from 'react'
import { devices as initialDevices } from '../../../../data/data'
import DeviceCard from './components/DeviceCard'
import { confirmAlert } from 'react-confirm-alert'
import { toast } from 'react-toastify'


const Devices = () => {
  const [devices, setDevices] = useState(initialDevices);

  const handleDeleteDevice = (deviceId) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to delete the user?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            setDevices(devices.filter(device => device.id !== deviceId));
            toast.success('Device deleted successfully');
          },
        },
        {
          label: 'No',
          onClick: () => toast.info('Delete action cancelled')
        }
      ]
    })
  }
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
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.8rem",
          }}
        >
          {devices.map((device, i)=>(
            <DeviceCard key={i} device={device} handleDeleteDevice={handleDeleteDevice} />
          ))} 
        </Box>
      </Box>
    </>
  )
}

export default Devices