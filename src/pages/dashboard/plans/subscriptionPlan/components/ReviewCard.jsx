import { Box, Button, Grid, Typography, styled } from '@mui/material'
import React from 'react'
import PinIcon from '../../../../../assets/svgs/plans/PinIcon'
import PlanCard from './PlanCard';
import CardInfo from './CardInfo';

const ReviewCard = ({ card }) => {
  const totalAmount = parseFloat(card.price.replace('$', ''));
  const taxAmount = totalAmount * (30 / 100);
  const flooredTax = Math.floor(taxAmount * 100) / 100;
  const tax = flooredTax.toFixed(2);
  const price = totalAmount + flooredTax;
  const totalPrice = price.toFixed(2);

  return (
    <Box sx={{ width: '100%' }}>
      <Typography sx={{
        color: 'rgba(17, 17, 17, 0.6)',
        fontSize: '14px',
        fontWeight: 600,
        marginTop: '36px'
      }}>
        REVIEW ORDER
      </Typography>
      <GridContainer container>
        <Grid item xs={12} md={4}>
          <Box sx={{display: 'flex', alignItems: 'center', gap: '9px'}}>
            <PinIcon />
            <TypographyOne>
              Billing Address:
            </TypographyOne>
          </Box>
          <TypographyOne sx={{ fontWeight: 600, margin: '16px 0' }}>
            5678 Maple Avenue, Anytown, CA, 90210, USA
          </TypographyOne>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <TypographyOne>
              Plan Selected:
            </TypographyOne>
            <TypographyOne sx={{ fontWeight: 600 }}>
              {card.title}
            </TypographyOne>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '16px 0' }}>
            <TypographyOne>
              Monthly Fee:
            </TypographyOne>
            <TypographyOne sx={{ fontWeight: 600 }}>
              {card.price}
            </TypographyOne>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <TypographyOne>
              Tax:
            </TypographyOne>
            <TypographyOne sx={{ fontWeight: 600 }}>
              ${tax}
            </TypographyOne>
          </Box>
          <Divider></Divider>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <TypographyOne>
            Total Monthly Charge:
            </TypographyOne>
            <TypographyOne sx={{ fontWeight: 600 }}>
              ${totalPrice}
            </TypographyOne>
          </Box>
        </Grid>
        <Grid item xs={12} md={8} display='flex' justifyContent='flex-end'>
          <CardInfo card={card} />
        </Grid>
      </GridContainer>
      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '24px'
      }}>
          <Button sx={{color: '#fff', width: '249px', height: '56px', borderRadius: '8px'}}>
            CONTINUE & SUBSCRIBE
          </Button>
      </Box>
    </Box>
  )
}

export default ReviewCard

const GridContainer = styled(Grid)({
  background: 'rgba(49, 39, 91, 0.05)',
  padding: '24px',
  '@media(max-width:576px)': {
    padding: '16px'
  }
})

const TypographyOne = styled(Typography)({
  fontSize: '16px',
  color: 'rgba(0, 0, 0, 1)'
})

const Divider = styled(Box)({
  width: '100%',
  height: '1px',
  background: 'rgba(0, 0, 0, 0.4)',
  margin: '16px 0'
})