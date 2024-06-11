import { Box } from '@mui/material'
import React from 'react'
import { devices } from '../../../../data/data'
import DeviceCard from './components/DeviceCard'


const Devices = () => {
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
            <DeviceCard key={i} device={device}/>
          ))} 
        </Box>
      </Box>
    </>
  )
}

export default Devices