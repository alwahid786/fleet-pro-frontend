import { Box, Typography } from '@mui/material'
import React from 'react'

const ReviewCard = () => {
  return (
    <Box>
      <Typography sx={{
        color: 'rgba(17, 17, 17, 0.6)',
        fontSize: '14px',
        fontWeight: 600,
        marginTop: '36px'
      }}>
        REVIEW ORDER
      </Typography>
    </Box>
  )
}

export default ReviewCard