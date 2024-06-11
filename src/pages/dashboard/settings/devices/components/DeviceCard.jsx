import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '../../../../../assets/svgs/settings/DeleteIcon'

const DeviceCard = ({ device }) => {
  return (
    <>
      <Box sx={{
        flexGrow: '1',
        background: 'rgba(255, 255, 255, 1)',
        borderRadius: '12px',
        padding: {
          xs: '1rem',
          md: '2rem'
        }
      }}>
        <Typography sx={{
          textAlign: 'center',
          color: 'rgba(70, 66, 85, 1)',
          fontSize: '18px',
          fontWeight: 500
        }}>
          {device.id}
        </Typography>
        <Box sx={{
          marginTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
           <Box>
            <Typography sx={{
              color: 'rgba(127, 127, 146, 1)',
              fontSize: '12px',
            }}>
              Date/time creation
            </Typography>
            <Typography sx={{
              color: 'rgba(0, 107, 206, 1)',
              fontSize: '16px',
            }}>
              {device.dateTimeCreation}
            </Typography>
           </Box>
           <Box>
            <Typography sx={{
              color: 'rgba(127, 127, 146, 1)',
              fontSize: '12px',
            }}>
              device Id
            </Typography>
            <Typography sx={{
              color: 'rgba(0, 107, 206, 1)',
              fontSize: '16px',
            }}>
              {device.deviceId}
            </Typography>
           </Box>
        </Box>
        <Button sx={{
          marginTop: {
            xs: '1rem',
            md: '2rem'
          },
          width: '100%',
          background: 'rgba(255, 204, 198, 1)',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'rgba(255, 25, 0, 1)',
          '&:hover': {
            background: 'rgba(255, 204, 198, 0.8)'
          }
        }}>
          <DeleteIcon />
          Delete
        </Button>
      </Box>
    </>
  )
}

export default DeviceCard