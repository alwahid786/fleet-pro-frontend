import React from 'react'
import SDIcon from '../../../../../assets/svgs/notification/SDIcon'
import FatigueIcon from '../../../../../assets/svgs/notification/FatigueIcon'
import GeoFencingIcon from '../../../../../assets/svgs/notification/GeoFencingIcon'
import InFenceIcon from '../../../../../assets/svgs/notification/InFence'
import HeadwayIcon from '../../../../../assets/svgs/notification/HeadwayIcon'
import { Box, Typography } from '@mui/material'

const NotificationItem = ({name, time, type}) => {
    const {backgroundColor, icon} = getNotificationDetails(type);

    const truncateName = name.length > 18 ? `${name.substring(0, 18)}...` : name;
  return ( 
    <Box sx={{ 
            display: 'flex', 
            gap: '1rem', 
            p: 2, 
            borderTop: '1px solid rgba(230, 230, 230, 1)',
            borderBottom: '1px solid rgba(230, 230, 230, 1)',
        }}>
        <Box sx={{
            border: '0.4px solid rgba(0, 0, 0, 1)',
            backgroundColor,
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {icon}
        </Box>
        <Box>
            <Typography variant='h4' sx={{ color: 'rgba(52, 52, 52, 1)', fontSize: '14px' }}>
                {truncateName}
            </Typography>
            <Typography sx={{ color: 'rgba(0, 0, 0, 1)', fontSize: '12px', fontWeight: 500 }}>
                {time}
            </Typography>
        </Box>
    </Box>
  )
}

export default NotificationItem

const getNotificationDetails = (type) => {
    switch (type) {
        case 'sdcard-removal':
          return { backgroundColor: 'rgba(237, 236, 11, 1)', icon: <SDIcon /> };
        case 'fatigue-detection':
          return { backgroundColor: 'rgba(251, 140, 140, 1)', icon: <FatigueIcon /> };
        case 'geo-fencing':
          return { backgroundColor: 'rgba(144, 255, 134, 1)', icon: <GeoFencingIcon /> };
        case 'headway-monitoring':
          return { backgroundColor: 'rgba(210, 205, 205, 1)', icon: <HeadwayIcon /> };
        case 'in-fence':
          return { backgroundColor: 'rgba(251, 180, 180, 1)', icon: <InFenceIcon /> };
        default:
          return { backgroundColor: '#fff', icon: null };
      }    
}