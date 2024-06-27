import { Box, Grid, styled } from '@mui/material'
import React from 'react'

const TruckDetail = () => {
  return (
    <TruckContainer container>
        <Grid></Grid>
    </TruckContainer>
  )
}

export default TruckDetail

const TruckContainer = styled(Grid)({
    background: '#fff',
    padding: '16px',
    borderRadius: '24px',
    height: '100%',
    marginTop: '-4rem'
})