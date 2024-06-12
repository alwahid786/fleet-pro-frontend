import { Box, Menu, Typography } from '@mui/material'
import React from 'react'
import NotificationItem from './NotificationItem'

const NotificationContent = ({ notiOpen, handleNotificationClose }) => {
  return (
    <>
      <Menu 
        anchorEl={notiOpen}
        open={Boolean(notiOpen)}
        onClose={handleNotificationClose}
        PaperProps={{
            sx: {
                width: '300px',
                height: '396px',
                borderRadius: '6px',
                boxShadow: '2px 2px 8px 0px rgba(0, 0, 0, 0.32), -2px 2px 8px 0px rgba(0, 0, 0, 0.32)',
                '&::-webkit-scrollbar': {
                    width: '6px'
                },
                '&::-webkit-scrollbar-track': {
                    background: 'rgba(0, 25, 51, 0.2)',
                    borderRadius: '4px'
                },
                '&::-webkit-scrollbar-thumb': {
                    background: 'rgba(0, 107, 206, 1)',
                    borderRadius: '4px'
                }
            }
        }}
      >
        <NotificationInnerContent />
      </Menu>  
    </>
  )
}

export default NotificationContent

const NotificationInnerContent = () => {
    return ( 
        <Box>
            <Box sx={{ display: 'flex', gap: '1.3rem', p: 2 }}>
                <Typography sx={{ fontSize: '10px', color: 'rgba(65, 65, 65, 1)' }}>
                    Notifications
                </Typography>
                <Typography sx={{ fontSize: '10px', color: 'rgba(0, 107, 206, 1)', fontWeight: 500 }}>
                    12 New
                </Typography>
            </Box>
            <NotificationItem type='sdcard-removal' name='SD card removal' time='5 min' />
            <NotificationItem type='fatigue-detection' name='Fatigue Detection' time='5 min' />
            <NotificationItem type='geo-fencing' name='Geo-fencing Added' time='5 min' />
            <NotificationItem type='sdcard-removal' name='SD card removal' time='5 min' />
            <NotificationItem type='headway-monitoring' name='Headway Monitoring System' time='5 min' />
            <NotificationItem type='in-fence' name='In-fence' time='5 min' />
            <Box sx={{
                textAlign: 'center',
                color: 'rgba(0, 107, 206, 1)',
                fontSize: '12px',
                fontWeight: 500,
                p: 2,
                cursor: 'pointer'
            }}>
                SEE ALL NOTIFICATIONS
            </Box>
        </Box>
    )
}