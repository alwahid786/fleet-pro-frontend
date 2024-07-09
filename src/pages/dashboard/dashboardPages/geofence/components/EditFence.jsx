import { Box } from '@mui/material'
import React from 'react'
import BackIcon from '../../../../../assets/svgs/modal/BackIcon'
import CloseIcon from '../../../../../assets/svgs/modal/CloseIcon'

const EditFence = ({onClose}) => {
  return (
    <>
    <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
             <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                color: 'rgba(17, 17, 17, 1)',
                fontSize: {
                    xs: '1rem',
                    md: '1.5rem'
                },
                fontWeight: 600
             }}>
                <Box sx={{cursor: 'pointer', height: '25px'}} onClick={onClose}>
                    <BackIcon />
                </Box>
                EDIT FENCE
             </Box>
             <Box sx={{cursor: 'pointer'}} onClick={onClose}>
                <CloseIcon onClick={onClose} />
            </Box>  
        </Box>
    </>
  )
}

export default EditFence;
