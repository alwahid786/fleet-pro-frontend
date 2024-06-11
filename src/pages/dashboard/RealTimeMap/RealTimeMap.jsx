import React from 'react'
import { Box, Grid } from '@mui/material';
import Map from './components/map/Map'
const RealTimeMap = () => {
  return (
    <>
      <Grid container spacing={3} sx={{ margin: 0 }}>
        <Grid item xs={12} md={8} sx={{
          paddingLeft: {
            xs: '0 !important',
            md: '24px !important'
          },
          paddingRight: '24px'
        }}>
          <Box sx={{
            height: '100%',
            background: '#fff',
            borderRadius: '16px',
          }}>
            <Map />
          </Box>
        </Grid>
        <Grid item xs={12} md={4} sx={{ pl: '0 !important' }}>
          <Box sx={{
            height: '100%',
            background: '#fff',
            borderRadius: '16px', p: 2, paddingRight: {
              xs: '24px',
              md: '0'
            }
          }}>
            List Of Alerts
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default RealTimeMap
